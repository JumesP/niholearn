import React from "react";

import FlipCard from '../../../components/atoms/flipping-container';

// import "./css/Katakana.scss";
import "./css/KataKanaFlipCards.scss";

const katakanaFlipCards = [
    { kana: "ア", romaji: "a" },   { kana: "イ", romaji: "i" },   { kana: "ウ", romaji: "u" },   { kana: "エ", romaji: "e" },   { kana: "オ", romaji: "o" },
    { kana: "カ", romaji: "ka" },  { kana: "キ", romaji: "ki" },  { kana: "ク", romaji: "ku" },  { kana: "ケ", romaji: "ke" },  { kana: "コ", romaji: "ko" },
    { kana: "サ", romaji: "sa" },  { kana: "シ", romaji: "shi" }, { kana: "ス", romaji: "su" },  { kana: "セ", romaji: "se" },  { kana: "ソ", romaji: "so" },
    { kana: "タ", romaji: "ta" },  { kana: "チ", romaji: "chi" }, { kana: "ツ", romaji: "tsu" }, { kana: "テ", romaji: "te" },  { kana: "ト", romaji: "to" },
    { kana: "ナ", romaji: "na" },  { kana: "ニ", romaji: "ni" },  { kana: "ヌ", romaji: "nu" },  { kana: "ネ", romaji: "ne" },  { kana: "ノ", romaji: "no" },
    { kana: "ハ", romaji: "ha" },  { kana: "ヒ", romaji: "hi" },  { kana: "フ", romaji: "fu" },  { kana: "ヘ", romaji: "he" },  { kana: "ホ", romaji: "ho" },
    { kana: "マ", romaji: "ma" },  { kana: "ミ", romaji: "mi" },  { kana: "ム", romaji: "mu" },  { kana: "メ", romaji: "me" },  { kana: "モ", romaji: "mo" },
    { kana: "ヤ", romaji: "ya" },                              { kana: "ユ", romaji: "yu" },                              { kana: "ヨ", romaji: "yo" },
    { kana: "ラ", romaji: "ra" },  { kana: "リ", romaji: "ri" },  { kana: "ル", romaji: "ru" },  { kana: "レ", romaji: "re" },  { kana: "ロ", romaji: "ro" },
    { kana: "ワ", romaji: "wa" },                                                        { kana: "ヲ", romaji: "wo" },
    { kana: "ン", romaji: "n" }
];

export default function Katakana() {
    // Shuffle the katakanaFlipCards array and pick 5 random items
    const randomKatakana = React.useMemo(() => {
        const shuffled = [...katakanaFlipCards].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 5);
    }, []);

    return (
        <div className="KatakanaPage">
            <h1 className="title">Title!</h1>
            <h2 className="title">Subtitle!</h2>
            <div className="FlipCardContainer">
                {randomKatakana.map((item, idx) => (
                    <FlipCard key={idx} front={item.kana} back={item.romaji} />
                ))}
            </div>
        </div>
    );
}