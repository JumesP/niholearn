import React, { useState } from 'react';
import './styles.scss';

const ReferenceChart = ({ hiraganaorkatakanaData }) => {
    const [hiddenKana, setHiddenKana] = useState(new Set());
    const [hiddenRomaji, setHiddenRomaji] = useState(new Set());

    const hiraganaGroups = {
        vowels: hiraganaorkatakanaData.slice(0, 5),
        k: hiraganaorkatakanaData.slice(5, 10),
        s: hiraganaorkatakanaData.slice(10, 15),
        t: hiraganaorkatakanaData.slice(15, 20),
        n: hiraganaorkatakanaData.slice(20, 25),
        h: hiraganaorkatakanaData.slice(25, 30),
        m: hiraganaorkatakanaData.slice(30, 35),
        y: hiraganaorkatakanaData.slice(35, 38),
        r: hiraganaorkatakanaData.slice(38, 43),
        w: hiraganaorkatakanaData.slice(43, 45),
        extra: hiraganaorkatakanaData.slice(45)
    };

    const toggleKana = (kana, e) => {
        e.stopPropagation();
        setHiddenKana(prev => {
            const newSet = new Set(prev);
            if (newSet.has(kana)) {
                newSet.delete(kana);
            } else {
                newSet.add(kana);
            }
            return newSet;
        });
    };

    const toggleRomaji = (kana, e) => {
        e.stopPropagation();
        setHiddenRomaji(prev => {
            const newSet = new Set(prev);
            if (newSet.has(kana)) {
                newSet.delete(kana);
            } else {
                newSet.add(kana);
            }
            return newSet;
        });
    };

    const toggleBoth = (kana) => {
        setHiddenKana(prev => {
            const newSet = new Set(prev);
            if (newSet.has(kana)) {
                newSet.delete(kana);
            } else {
                newSet.add(kana);
            }
            return newSet;
        });
        setHiddenRomaji(prev => {
            const newSet = new Set(prev);
            if (newSet.has(kana)) {
                newSet.delete(kana);
            } else {
                newSet.add(kana);
            }
            return newSet;
        });
    };

    return (
        <div className="reference-chart">
            <h3>Hiragana Reference</h3>
            <div className="chart-grid">
                {Object.entries(hiraganaGroups).map(([group, chars]) => (
                    <div key={group} className="chart-group">
                        <h4>{group.toUpperCase()}</h4>
                        {chars.map(char => (
                            <div
                                key={char.kana}
                                className={`chart-item ${hiddenKana.has(char.kana) && hiddenRomaji.has(char.kana) ? 'all-hidden' : ''}`}
                                onClick={() => toggleBoth(char.kana)}
                            >
                                <div
                                    className={`kana-section ${hiddenKana.has(char.kana) ? 'hidden' : ''}`}
                                    onClick={(e) => toggleKana(char.kana, e)}
                                >
                                    <span className="kana">{char.kana}</span>
                                </div>
                                <div
                                    className={`romaji-section ${hiddenRomaji.has(char.kana) ? 'hidden' : ''}`}
                                    onClick={(e) => toggleRomaji(char.kana, e)}
                                >
                                    <span className="romaji">{char.romaji}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReferenceChart;

