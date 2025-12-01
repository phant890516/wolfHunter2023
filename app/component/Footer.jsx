"use client";
import Link from "next/link";

const Footer=()=>{
    
    return(
        <div className="footer z-40 relative">
            <ul className="footer-ul">
                <li><Link href="/"><div className="footer_img"><img src="./images/logo.png"></img></div><p className="footer_p">ワイルズ</p></Link></li>
                <li><Link href="/ice"><div className="footer_img"><img src="./images/mh-iceborne_logo.png"></img></div><p className="footer_p">ワールド</p></Link></li>
                <li><Link href="/sb"><div className="footer_img"><img src="./images/mh-sb_logo.png"></img></div><p className="footer_p">アイスボーン</p></Link></li>
                <li><Link href="/wilds"><div className="footer_img"><img src="./images/mh-wilds_logo.png"></img></div><p className="footer_p">ライズ</p></Link></li>
            </ul>
        </div>
    )
}

export default Footer;