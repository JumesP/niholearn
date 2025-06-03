import React from "react";

import FlipCard from '../components/atoms/flipping-container';
// import KanaCard from "../components/molecules/KanaCard/index";

import "./css/Hiragana.scss";

const hiragana = [
    { kana: "あ", romaji: "a" },   { kana: "い", romaji: "i" },   { kana: "う", romaji: "u" },   { kana: "え", romaji: "e" },   { kana: "お", romaji: "o" },
    { kana: "か", romaji: "ka" },  { kana: "き", romaji: "ki" },  { kana: "く", romaji: "ku" },  { kana: "け", romaji: "ke" },  { kana: "こ", romaji: "ko" },
    { kana: "さ", romaji: "sa" },  { kana: "し", romaji: "shi" }, { kana: "す", romaji: "su" },  { kana: "せ", romaji: "se" },  { kana: "そ", romaji: "so" },
    { kana: "た", romaji: "ta" },  { kana: "ち", romaji: "chi" }, { kana: "つ", romaji: "tsu" }, { kana: "て", romaji: "te" },  { kana: "と", romaji: "to" },
    { kana: "な", romaji: "na" },  { kana: "に", romaji: "ni" },  { kana: "ぬ", romaji: "nu" },  { kana: "ね", romaji: "ne" },  { kana: "の", romaji: "no" },
    { kana: "は", romaji: "ha" },  { kana: "ひ", romaji: "hi" },  { kana: "ふ", romaji: "fu" },  { kana: "へ", romaji: "he" },  { kana: "ほ", romaji: "ho" },
    { kana: "ま", romaji: "ma" },  { kana: "み", romaji: "mi" },  { kana: "む", romaji: "mu" },  { kana: "め", romaji: "me" },  { kana: "も", romaji: "mo" },
    { kana: "や", romaji: "ya" },                              { kana: "ゆ", romaji: "yu" },                              { kana: "よ", romaji: "yo" },
    { kana: "ら", romaji: "ra" },  { kana: "り", romaji: "ri" },  { kana: "る", romaji: "ru" },  { kana: "れ", romaji: "re" },  { kana: "ろ", romaji: "ro" },
    { kana: "わ", romaji: "wa" },                                                        { kana: "を", romaji: "wo" },
    { kana: "ん", romaji: "n" }
];

export default function Hiragana() {
    // Shuffle the hirogana array and pick 5 random items
    const randomHiragana = React.useMemo(() => {
        const shuffled = [...hiragana].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 5);
    }, []);

    return (
        <div className="HiraganaPage">
            <h1 className="title">Title!</h1>
            <h2 className="title">Subtitle!</h2>
            <div className="FlipCardContainer">
                {randomHiragana.map((item, idx) => (
                    <FlipCard key={idx} front={item.kana} back={item.romaji} />
                ))}
            </div>
        </div>
    );
}
