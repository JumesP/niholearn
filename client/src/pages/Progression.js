import React, { useState } from 'react';
import Container from '../components/atoms/container';
import { HiraganaCharacters, KatakanaCharacters, KanjiCharacters } from '../util/data/characters';
import './css/Progression.scss';

HiraganaCharacters.map((char, index) => (console.log(`Hiragana ${index + 1}: ${char.kana} (${char.romaji})`)));

const Progression = () => {
  const [openDropdown, setOpenDropdown] = useState({
    hiragana: false,
    katakana: false,
    kanji: false,
  });

  const toggleDropdown = (language) => {
    console.log("dropdown toggled for:", language);
    setOpenDropdown((prev) => ({
      ...prev,
      [language]: !prev[language],
    }));
  };

  const renderCharacters = (characters, type) => (
   <div className={`dropdown-content ${openDropdown[type] ? 'open' : ''}`}>
     {characters.map((char, index) => (
       <div
         key={index}
         className="character-container"
         data-level={char.level || "0"} // Using level from character data, defaulting to 0
       >
         <p>
           <span className="kana">{type === 'kanji' ? char.kanji : char.kana}</span>
           <span className="romaji">{type === 'kanji' ? char.meaning : char.romaji}</span>
         </p>
         <div className="progress-bar">
           <div
             className="progress"
             style={{ width: `${((char.level || 0) * 20)}%` }}
           ></div>
         </div>
       </div>
     ))}
   </div>
  );

  return (
    <div className="progression-page">
      <h1>Character Progression</h1>
      <div>
        <div className="dropdown">
          <button onClick={() => toggleDropdown('hiragana')}>
            Hiragana {openDropdown.hiragana ? '▼' : '▶'}
          </button>
          {renderCharacters(HiraganaCharacters, 'hiragana')}
        </div>
        <div className="dropdown">
          <button onClick={() => toggleDropdown('katakana')}>
            Katakana {openDropdown.katakana ? '▼' : '▶'}
          </button>
          {renderCharacters(KatakanaCharacters, 'katakana')}
        </div>
        <div className="dropdown">
          <button onClick={() => toggleDropdown('kanji')}>
            Kanji {openDropdown.kanji ? '▼' : '▶'}
          </button>
          {renderCharacters(KanjiCharacters, 'kanji')}
        </div>
      </div>
    </div>
  );
};

export default Progression;
