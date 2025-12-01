"use client";
import { useTransitionRouter } from "next-view-transitions";

// import Link from "next/link"

const Nav =()=>{
    const router = useTransitionRouter();
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
//////////////////////////////////////////////////////////////////////Home Page///////////////////////////////////////////////////////////////////////////////////////    
    return(
        <nav className="flex flex-row gap-[600px] z-50 fixed bg-black h-[85px]">
            <div className="logo grid place-items-center">
                <div className="link">
                    <a 
                    onClick={(e)=>{
                        e.preventDefault();
                        router.push("/",{
                            onTransitionReady: slideInOut,
                        });
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
                        router.push("/story",{
                            onTransitionReady: slideInOut,
                        });
                    }} 
                    href="/story">STORY</a>
                </div>
                <div className="link block my-auto">
                    <a 
                    onClick={(e)=>{
                        e.preventDefault();
                        router.push("/eagle",{
                            onTransitionReady: slideInOut,
                        });
                    }} 
                    href="/eagle">HERO</a>
                </div>
                <div className="link block my-auto">
                    <a 
                    onClick={(e)=>{
                        e.preventDefault();
                        router.push("/wolfman",{
                            onTransitionReady: slideInOut,
                        });
                    }} 
                    href="/wolfman">WOLFMAN</a>
                </div>
                <div className="link block my-auto">
                    <a 
                    onClick={(e)=>{
                        e.preventDefault();
                        router.push("/goatdriver",{
                            onTransitionReady: slideInOut,
                        });
                    }} 
                    href="/goatdriver">DRIVER</a>
                </div>
            </div>
        </nav>
    )
}
export default Nav