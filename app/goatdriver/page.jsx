"use client";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
// 角色資料
const goatDriverData = {
    id: 'goat-driver',
    name: 'ヤギの運転手',
    subtitle: '不幸なタクシードライバー | The Unlucky Cab Driver',
    fileId: '003',
    themeColor: 'yellow',
    bgColor: '#1a1a0c',
    primaryImage: 'uploaded:goat_scene.png-797b11f4-fe34-4bf4-b616-4ebd73d525f0',
    conceptImage: 'uploaded:goat.png-6e7f3b02-3c9d-4f13-9b61-20d8988caab5',
    settings: '巻き込まれてしまう不運なタクシー運転手。ヤギを選んだ理由は、「緊張すると暴走してしまう性質」が面白いと感じたため。彼の「暴走」特性は、緊張時に予期せぬ超高速運転技術を発揮させ、コミカルでスリリングなキャラクターです。',
    abilities: [
        { name: 'タクシー', description: 'この車は見た目以上に頑丈で速い。特に危機的な状況ではその真価を発揮する。' },
        { name: '暴走運転', description: '極度の緊張時、無意識の限界運転状態に入り、最も狭い空間をすり抜け、全ての攻撃を回避する。' },
        { name: '驚異的な生命力', description: '爆発や衝突に巻き込まれるにもかかわらず、彼は常に奇跡的に無傷で生き残る。' },
    ],
    metadata: [
        { key: '分類', value: '一般人/巻き込まれ体質 (Civilian/Involved)' },
        { key: 'モチーフ', value: '山羊 (Goat)' },
        { key: '主要行動エリア', value: 'Taipei City' },
        { key: '狀態', value: '生存 (Alive... for now)' },
    ]
};

const GoatDriver = () => {
    const { name, subtitle, fileId, themeColor, bgColor, primaryImage, conceptImage, settings, abilities, metadata } = goatDriverData;

    // 定義霓虹燈樣式 (Neon Styles)
    const textNeonStyle = {
        textShadow: '0 0 8px rgba(255, 255, 0, 0.8), 0 0 15px rgba(200, 200, 0, 0.5)',
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
                .border-yellow-glow {
                    box-shadow: 0 0 12px rgba(255, 255, 0, 0.5);
                    border-color: #FFFF00;
                }
                .text-yellow-neon {
                    text-shadow: 0 0 8px rgba(255, 255, 0, 0.8), 0 0 15px rgba(200, 200, 0, 0.5);
                }
            `}</style>

            {/* 主容器 */}
            <div className={`max-w-6xl mx-auto bg-gray-900/70 backdrop-blur-sm rounded-3xl overflow-hidden border-2 ${borderGlowClass} border-yellow-glow`}>
                
                {/* 標題區塊 */}
                <div className={`p-6 md:p-10 bg-${themeColor}-900/20 border-b border-${themeColor}-700/50`}>
                    <h1 className={`text-3xl md:text-5xl font-bold uppercase ${themeColorClass} tracking-widest text-yellow-neon`} style={textNeonStyle}>
                        キャラクターコード：{fileId} | {name}
                    </h1>
                    <p className="text-lg md:text-xl mt-1 text-gray-300">{subtitle}</p>
                </div>

                {/* 角色內容 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-10">
                    
                    {/* 左側：圖片與基本資料 */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className={`rounded-xl overflow-hidden border-2 border-${themeColor}-500/50 border-yellow-glow`}>
                            <img 
                                src="images/goat_scene.png"
                                alt={`${name} クローズアップ`} 
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://placehold.co/600x600/1e293b/FFFF00?text=${name.toUpperCase()}+PROFILE`;
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
                                src="images/goat.png"
                                alt={`${name} 設計図`} 
                                className="w-full h-auto object-contain"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://placehold.co/1200x400/1e293b/FFFF00?text=${name.toUpperCase()}+DESIGN+SKETCH`;
                                }}
                            />
                        </div>

                    </div>
                </div>

                {/* 頁腳/返回按鈕 */}
                <footer className={`p-6 md:p-10 bg-gray-800/80 border-t border-${themeColor}-700/50 text-center`}>
                    <a href="/" className={`inline-block px-6 py-2 bg-${themeColor}-600 hover:bg-${themeColor}-500 rounded-lg text-lg font-bold transition duration-200 border-2 border-${themeColor}-400/50 text-yellow-neon`}>
                        &larr; トップヘ戻る (Back to Overview)
                    </a>
                </footer>

            </div>
        </div>
    );
};

export default GoatDriver;