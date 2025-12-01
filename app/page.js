"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ReactLenis from "@studio-freight/react-lenis";
import { useRef, useState, useEffect} from "react";
import Footer from "./component/Footer";
import Link from "next/link";

//Home
export default function Home() {
  const container = useRef();
  const paragraphs = [
  {
    title: "Why Wolf Hunter ?",
    text: "サイバーパンクの世界観から影響を受け、台北の信義計画区をモチーフに、近未来の高層都市を舞台としたアクションを表現する。チーム全員で意見を出し合い、「アクション」「カーチェイス」「ドルコミカルな要素」を取り入れられる方向性に決定した。",
    bgImage: "url('/images/scene2.png')"
  },
  {
    title: "What Wolf Hunter is ?",
    text: "X市の空を飛回るヒーロー「イーグル」。ある日、彼は宿敵である「ウルフマン」の不審な動きを察知し、出動命令を受ける。一方、ウルフマンは自らの基地で新たな任務を受け、街でタクシーを拾って目的地へと向かう。",
    bgImage: "url('/images/scene7.png')"
  },
  {
    title: "Story",
    text: "その途中、イーグルがウルフマンを発見し、激しい追跡が始まる。ウルフマンは車内から反撃し、同時に運転しているやギのタクシー運転手を脅す。攻防が続く中、車は那個地に陥り危機的状況に。イーグルは運転手のヤギを救出し、再びウルフマンを追い詰める。最終的にイーグルはウルフマンを制圧し、新たな任務の端信を受けて次の戦いへと飛び立つ。",
    bgImage: "url('/images/scene10.png')"
  }
];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        setIsInView(entry.isIntersecting);
    }, { threshold: 0.3 });

    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
    }, []);

  useEffect(() => {
    if (!isInView) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // 計算該section內的滾動位置
      const scrollInSection = -sectionTop + window.innerHeight * 0.2;
      const progress = scrollInSection / sectionHeight;
      
      // 計算當前顯示的段落
      const newIndex = Math.min(
        Math.max(Math.floor(progress * paragraphs.length), 0),
        paragraphs.length - 1
      );
      
      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInView]);


  return (
    <ReactLenis root>
    <div className="home">
     <main>
    <section className="section1">  
        <div className="main_img overflow-hidden w-full h-[100vh]">
            <iframe width="560" height="315" className="w-full h-full object-contain"
            src="https://www.youtube.com/embed/wuDmACy10ok?si=3688gA4dA3hPxLkX" 
            title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
            {/* <video src="./videos/wolf-hunter.mp4" className="w-full h-full object-contain" controls></video> */}
        </div>
      
    </section>
   
    {/* <section className="section3">
        <h1>What Wolf Hunter is?</h1>
        <div className="para">
            <p>「サイバーパンクの世界観から影響を受け、
            台北の信義計画区をモチーフに、
            近未来の高層都市を舞台としたカーアクションを表現する。
            チーム全員で意見を出し合い、
            「アクション」「カーチェイス」「少しコミカルな要素」を取り入れる方向性に決定した。
            </p>
            <p>
                X市の空を巡回するヒーロー「イーグル」。
                ある日、彼は宿敵である「ウルフマン」の不審な動きを察知し、出動命令を受ける。

                一方、ウルフマンは自らの基地で新たな任務を受け、
                街でタクシーを拾って目的地へと向かう。

                その途中、イーグルがウルフマンを発見し、激しい追跡が始まる。
                ウルフマンは車内から反撃し、同時に運転しているヤギのタクシー運転手を脅す。

                攻防が続く中、車は制御不能に陥り危機的状況に。
                イーグルは運転手のヤギを救出し、
                再びウルフマンを追い詰める。

                最終的にイーグルはウルフマンを制圧し、
                新たな任務の通信を受けて次の戦いへと飛び立つ——。
            </p>
        </div>
    </section>
     */}

      <div 
      ref={sectionRef}
      className="relative w-full"
      style={{ minHeight: '300vh' }}
    >
      {/* 固定背景 */}
      {isInView &&(
      <div
        className="fixed top-0 left-0 w-full h-screen z-0 transition-all duration-700 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: paragraphs[activeIndex].bgImage,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center'
        }}
      >
        {/* 深色覆蓋層 */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      )}
      {/* 內容區域 */}
      <div className="relative z-20">
        {paragraphs.map((para, idx) => (
          <section
            key={idx}
            className={`h-screen flex items-center justify-center px-8 transition-all duration-700 ${
              activeIndex >= idx ? 'opacity-100' : 'opacity-30'
            }`}
          >
            <div className="max-w-2xl">
              {/* 標題 */}
              <h2 className={`text-5xl font-bold mb-8 text-white transition-all duration-700 transform ${
                activeIndex === idx 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-[-50px] opacity-0'
              }`}>
                {para.title}
              </h2>

              {/* 文本段落 */}
              <p className={`text-xl leading-relaxed text-gray-100 transition-all duration-700 transform ${
                activeIndex === idx 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-[-50px] opacity-0'
              }`}>
                {para.text}
              </p>

            </div>
          </section>
        ))}
      </div>
    </div>
    <section className="section4">
        <h1>キャラとシーンの紹介ヘ</h1>
        <div className="carousel_container swiper">
            <div className="carousel_wrapper">
                <ul className="list_content swiper-wrapper">
                    <li className="list_item swiper-slide"><Link href="/eagle" className="list_link"><img src="./images/scene3.png" alt="ice" className="list_img"></img></Link></li>
                    <li className="list_item swiper-slide"><Link href="/wolfman" className="list_link"><img src="./images/scene6.png" alt="sb" className="list_img"></img></Link></li>
                    <li className="list_item swiper-slide"><Link href="/goatdriver" className="list_link"><img src="./images/goat_scene.png" alt="wilds" className="list_img"></img></Link></li>
                </ul>                
            </div>
        </div>
    </section>
</main>
    </div>
    </ReactLenis>
    );
}
