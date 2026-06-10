"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// import Link from "next/link"

const Nav =()=>{
    const router = useRouter();
    const pathname = usePathname();
    const pathnameRef = useRef(pathname);
    const resolveNavRef = useRef(null);

    useEffect(() => {
        pathnameRef.current = pathname;
        if (resolveNavRef.current) {
            resolveNavRef.current();
            resolveNavRef.current = null;
        }
    }, [pathname]);
//////////////////////////////////////////////////////////////paging animation//////////////////////////////////////////////////////////////////////////////
    function slideInOut(){
        document.documentElement.animate([
            {
                opacity:1,
                transform:"translateY(0)",
            },
            {
                opacity:0.2,
                transform:"translateY(-35%)",
            }
            ],
            {
                duration:1500,
                easing:"cubic-bezier(0.87, 0, 0.13, 1)",
                fill:"forwards",
                pseudoElement:"::view-transition-old(root)",
            }
        );

        document.documentElement.animate([
            {
                clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
            },
            {
                clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
            },
            ],
        {
            duration:1500,
            easing:"cubic-bezier(0.87, 0, 0.13, 1)",
            fill:"forwards",
            pseudoElement:"::view-transition-new(root)",
        }
        );
    }

    function navigate(path){
        if (path === pathnameRef.current) return;
        if (typeof document === "undefined" || !document.startViewTransition) {
            router.push(path);
            return;
        }
        const transition = document.startViewTransition(() => {
            return new Promise((resolve) => {
                resolveNavRef.current = resolve;
                router.push(path);
                // 保險：若導航逾時仍未完成，避免 view transition 一直卡著
                setTimeout(resolve, 1000);
            });
        });
        transition.ready.then(slideInOut).catch(() => {});
        transition.finished.catch(() => {});
    }
//////////////////////////////////////////////////////////////////////Home Page///////////////////////////////////////////////////////////////////////////////////////
    return(
        <nav className="flex flex-row gap-[600px] z-50 fixed bg-black h-[85px]">
            <div className="logo grid place-items-center">
                <div className="link">
                    <a 
                    onClick={(e)=>{
                        e.preventDefault();
                        navigate("/");
                    }}
                    href="/">
                    <img src="./images/top_logo.png"></img>
                    </a>
                </div>
            </div>
            <div className="links flex flex-row gap-[50px]">
                <div className="link block my-auto">
                    <a 
                    onClick={(e)=>{
                        e.preventDefault();
                        navigate("/story");
                    }}
                    href="/story">STORY</a>
                </div>
                <div className="link block my-auto">
                    <a 
                    onClick={(e)=>{
                        e.preventDefault();
                        navigate("/eagle");
                    }}
                    href="/eagle">HERO</a>
                </div>
                <div className="link block my-auto">
                    <a 
                    onClick={(e)=>{
                        e.preventDefault();
                        navigate("/wolfman");
                    }}
                    href="/wolfman">WOLFMAN</a>
                </div>
                <div className="link block my-auto">
                    <a 
                    onClick={(e)=>{
                        e.preventDefault();
                        navigate("/goatdriver");
                    }}
                    href="/goatdriver">DRIVER</a>
                </div>
            </div>
        </nav>
    )
}
export default Nav