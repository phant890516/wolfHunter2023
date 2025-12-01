"use client";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

// 角色資料
const wolfmanData = {
    id: 'wolfman',
    name: 'ウルフマン',
    subtitle: '影を歩むテクノビースト | The Cybernetic Beast',
    fileId: '002',
    themeColor: 'red',
    bgColor: '#1a0c10',
    primaryImage: 'uploaded:scene6.jpg-e1700742-67b6-41b8-b310-631cebb5b97c',
    conceptImage: 'uploaded:wolf.jpg-5994db17-8ad0-495a-a117-14b371073a5c',
    settings: '“狼男”をモチーフにした反英雄。サイバーパンクらしく、現代的なテクノロジー武器で戦う。ウルフマンは生体改造と機械強化を融合させた肉体を駆使して任務を遂行する。彼は隠密に行動し、法の境界線を遊泳しながら、自らの正義や利益を追求している。',
    abilities: [
        { name: '機械化ボーンクロー', description: '腕に内蔵された伸縮自在の強化爪。現代の装甲の大部分を切断可能で、電流パルスによって敵を麻痺させることもできる。' },
        { name: '光学迷彩', description: '皮膚下の光学コーティングにより、環境の影に完全に溶け込むことができ、奇襲や迅速な撤退を可能にする。' },
        { name: '高周波振動ピストル', description: '特製のハイテク武器。発射された弾丸は高周波振動を発生させ、標的内部の電子部品を破壊する。' },
    ],
    metadata: [
        { key: '分類', value: 'アンチヒーロー (Anti-Hero)' },
        { key: '原型', value: '狼男 (Werewolf)' },
        { key: '主要行動区域', value: '暗黒街と旧市街 (Underworld / Old Sector)' },
        { key: '状態', value: '周縁部で活動中 (Marginally Active)' },
    ]
};

const Wolfman = () => {
    const { name, subtitle, fileId, themeColor, bgColor, primaryImage, conceptImage, settings, abilities, metadata } = wolfmanData;

    // 定義霓虹燈樣式 (Neon Styles)
    const textNeonStyle = {
        textShadow: '0 0 8px rgba(255, 0, 80, 0.8), 0 0 15px rgba(200, 0, 60, 0.5)',
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
                .border-red-glow {
                    box-shadow: 0 0 12px rgba(255, 0, 80, 0.5);
                    border-color: #FF0050;
                }
                .text-red-neon {
                    text-shadow: 0 0 8px rgba(255, 0, 80, 0.8), 0 0 15px rgba(200, 0, 60, 0.5);
                }
            `}</style>

            {/* 主容器 */}
            <div className={`max-w-6xl mx-auto bg-gray-900/70 backdrop-blur-sm rounded-3xl overflow-hidden border-2 ${borderGlowClass} border-red-glow`}>
                
                {/* 標題區塊 */}
                <div className={`p-6 md:p-10 bg-${themeColor}-900/20 border-b border-${themeColor}-700/50`}>
                    <h1 className={`text-3xl md:text-5xl font-bold uppercase ${themeColorClass} tracking-widest text-red-neon`} style={textNeonStyle}>
                        檔案編號：{fileId} | {name}
                    </h1>
                    <p className="text-lg md:text-xl mt-1 text-gray-300">{subtitle}</p>
                </div>

                {/* 角色內容 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-10">
                    
                    {/* 左側：圖片與基本資料 */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className={`rounded-xl overflow-hidden border-2 border-${themeColor}-500/50 border-red-glow`}>
                            <img 
                                src="images/scene6.png"
                                alt={`${name} 近景`} 
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://placehold.co/600x600/1e293b/FF0050?text=${name.toUpperCase()}+PROFILE`;
                                }}
                            />
                        </div>

                        <div className={`p-4 bg-gray-800/80 rounded-xl border border-${themeColor}-600/50`}>
                            <h3 className={`text-xl font-bold ${themeColorClass} mb-3`}>基本數據 (Primary Data)</h3>
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
                            <h3 className={`text-2xl font-bold ${themeColorClass} mb-3 border-b border-${themeColor}-700 pb-2`}>【角色設定】</h3>
                            <p className="text-gray-300 leading-relaxed text-base">{settings}</p>
                        </div>

                        {/* 專屬能力 */}
                        <div className={`p-4 bg-gray-800/80 rounded-xl border border-${themeColor}-600/50`}>
                            <h3 className={`text-2xl font-bold ${themeColorClass} mb-3 border-b border-${themeColor}-700 pb-2`}>【主要配備與能力】</h3>
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
                                src="images/wolf.png"
                                alt={`${name} 設計図`} 
                                className="w-full h-auto object-contain"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://placehold.co/1200x400/1e293b/FF0050?text=${name.toUpperCase()}+DESIGN+SKETCH`;
                                }}
                            />
                        </div>

                    </div>
                </div>

                {/* 頁腳/返回按鈕 */}
                <footer className={`p-6 md:p-10 bg-gray-800/80 border-t border-${themeColor}-700/50 text-center`}>
                    <a href="/" className={`inline-block px-6 py-2 bg-${themeColor}-600 hover:bg-${themeColor}-500 rounded-lg text-lg font-bold transition duration-200 border-2 border-${themeColor}-400/50 text-red-neon`}>
                        &larr; トップに戻る (Back to Overview)
                    </a>
                </footer>

            </div>
        </div>
    );
};

export default Wolfman;