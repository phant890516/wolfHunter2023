"use client";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

// 角色資料
const eagleData = {
    id: 'eagle',
    name: 'イーグル',
    subtitle: '天空を守護する精密兵器 | The Sentinel of the Sky',
    fileId: '001',
    themeColor: 'cyan',
    bgColor: '#0c1822',
    primaryImage: 'uploaded:scene3.jpg-4571631c-52e0-4b0e-b616-4ebd73d525f0',
    conceptImage: 'uploaded:eagle.png-c7725452-7264-4e07-96e0-a670eb65159b',
    settings: '映画に登場する“鷹”をモチーフにしたヒーロー。高性能の翼と最新兵器を駆使して敵を制圧する。イーグルは都市上空の治安を守る守護者であり、そのパワードスーツと飛行システムは現代科学の結晶だ。彼は正確無比かつ迅速な動きと強力な火力を武器に、空中に突破不可能な防衛線を築き上げる。',
    abilities: [
        { name: '高性能の翼', description: '超軽量合金と反重力技術を使用し、超音速飛行および極限の機動アクションを可能にする。' },
        { name: '複合照準システム', description: '熱感知、暗視、電子ロックオン機能を統合し、数キロメートル先の移動目標を精密に打撃できる。' },
        { name: '制圧兵器', description: '非致死性の制圧用兵器。神経系を麻痺させる超低周波音を発し、敵の戦闘力を即座に奪う。' },
    ],
    metadata: [
        { key: '分類', value: '英雄 (Hero)' },
        { key: 'モチーフ', value: '鷹 (Raptor)' },
        { key: '主要行動エリア', value: '高高度および超高層ビル群 (High Altitude / Megacity)' },
        { key: '状態', value: '活動中 (Active)' },
    ]
};

const Eagle = () => {
    const { name, subtitle, fileId, themeColor, bgColor, primaryImage, conceptImage, settings, abilities, metadata } = eagleData;

    // 定義霓虹燈樣式 (Neon Styles)
    const textNeonStyle = {
        textShadow: '0 0 8px rgba(0, 255, 255, 0.8), 0 0 15px rgba(0, 200, 200, 0.5)',
        fontFamily: 'Orbitron, sans-serif'
    };
    const borderGlowClass = `border-${themeColor}-700/50`;
    const themeColorClass = `text-${themeColor}-400`;

    return (
        <div className="min-h-screen text-gray-100 p-4 md:p-12 antialiased" style={{ backgroundColor: bgColor }}>
            {/* 內聯樣式定義：Next.js/Styled-JSX 語法 */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Orbitron:wght@400;700&display=swap');
                body {
                    font-family: 'Inter', sans-serif;
                }
                .border-cyan-glow {
                    box-shadow: 0 0 12px rgba(0, 255, 255, 0.5);
                    border-color: #00FFFF;
                }
                .text-cyan-neon {
                    text-shadow: 0 0 8px rgba(0, 255, 255, 0.8), 0 0 15px rgba(0, 200, 200, 0.5);
                }
            `}</style>

            {/* 主容器 */}
            <div className={`max-w-6xl mx-auto bg-gray-900/70 backdrop-blur-sm rounded-3xl overflow-hidden border-2 ${borderGlowClass} border-cyan-glow`}>
                
                {/* 標題區塊 */}
                <div className={`p-6 md:p-10 bg-${themeColor}-900/20 border-b border-${themeColor}-700/50`}>
                    <h1 className={`text-3xl md:text-5xl font-bold uppercase ${themeColorClass} tracking-widest text-cyan-neon`} style={textNeonStyle}>
                        キャラクターコード：{fileId} | {name}
                    </h1>
                    <p className="text-lg md:text-xl mt-1 text-gray-300">{subtitle}</p>
                </div>

                {/* 角色內容 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-10">
                    
                    {/* 左側：圖片與基本資料 */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className={`rounded-xl overflow-hidden border-2 border-${themeColor}-500/50 border-cyan-glow`}>
                            <img 
                                src="images/eagle_main2.png"
                                alt={`${name} 飛行場景`} 
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://placehold.co/600x600/1e293b/00FFFF?text=${name.toUpperCase()}+PROFILE`;
                                }}
                            />
                        </div>

                        <div className={`p-4 bg-gray-800/80 rounded-xl border border-${themeColor}-600/50`}>
                            <h3 className={`text-xl font-bold ${themeColorClass} mb-3`}>基本データ (Primary Data)</h3>
                            <ul className="text-sm space-y-2">
                                {metadata.map((item, index) => (
                                    <li key={index}><strong className={`text-${themeColor}-300`}>{item.key}:</strong> {item.value}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 右側：設定與能力 */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        <div className={`p-4 bg-gray-800/80 rounded-xl border border-${themeColor}-600/50`}>
                            <h3 className={`text-2xl font-bold ${themeColorClass} mb-3 border-b border-${themeColor}-700 pb-2`}>【キャラクター設定】</h3>
                            <p className="text-gray-300 leading-relaxed text-base">{settings}</p>
                        </div>

                        {/* 專屬能力 */}
                        <div className={`p-4 bg-gray-800/80 rounded-xl border border-${themeColor}-600/50`}>
                            <h3 className={`text-2xl font-bold ${themeColorClass} mb-3 border-b border-${themeColor}-700 pb-2`}>【アイテムとアビリティ】</h3>
                            <ul className="space-y-3 mt-4 text-sm md:text-base">
                                {abilities.map((ability, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className={`text-${themeColor}-400 font-bold mr-3 min-w-[100px]`}>{ability.name}:</span>
                                        <span className="text-gray-300">{ability.description}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 概念圖 */}
                        <div className={`rounded-xl border-2 border-${themeColor}-500/50 p-4`}>
                            <h3 className={`text-xl font-bold ${themeColorClass} mb-3`}>コンセプト</h3>
                            <img 
                                src="images/eagle.png"
                                alt={`${name} 設計図`} 
                                className="w-full h-auto object-contain"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://placehold.co/1200x400/1e293b/00FFFF?text=${name.toUpperCase()}+DESIGN+SKETCH`;
                                }}
                            />
                        </div>

                    </div>
                </div>

                {/* 頁腳/返回按鈕 */}
                <footer className={`p-6 md:p-10 bg-gray-800/80 border-t border-${themeColor}-700/50 text-center`}>
                    <a href="/" className={`inline-block px-6 py-2 bg-${themeColor}-600 hover:bg-${themeColor}-500 rounded-lg text-lg font-bold transition duration-200 border-2 border-${themeColor}-400/50 text-cyan-neon`}>
                        &larr; トップに戻る (Back to Overview)
                    </a>
                </footer>

            </div>
        </div>
    );
};

export default Eagle;