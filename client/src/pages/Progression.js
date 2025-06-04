import React, { useState, useEffect } from 'react';
import Container from '../components/atoms/container';
import { HiraganaCharacters, KatakanaCharacters, KanjiCharacters } from '../util/data/characters';
import { getProgression, updateCharacterProgress } from '../util/progression-stage1';
import './css/Progression.scss';

const Progression = () => {
  const [openDropdown, setOpenDropdown] = useState({
    hiragana: false,
    katakana: false,
    kanji: false,
  });
  const [characterData, setCharacterData] = useState({ characters: [] });

  useEffect(() => {
    loadCharacterData();
  }, []);

  const loadCharacterData = async () => {
    const data = await getProgression();
    setCharacterData(data);
  };

  // Test function to update character progress
  const testProgressUpdate = async (character) => {
    console.log('Testing progress update for:', character);
    await updateCharacterProgress(character, 5);
    await loadCharacterData(); // Reload the data to see changes
  };

  const toggleDropdown = (language) => {
    console.log("dropdown toggled for:", language);
    setOpenDropdown((prev) => ({
      ...prev,
      [language]: !prev[language],
    }));
  };

  const renderCharacters = (characters, type) => (
   <div className={`dropdown-content ${openDropdown[type] ? 'open' : ''}`}>
     {characters.map((char, index) => {
       // Find progression data for this character
       const progressData = characterData.characters.find(c => c.character === char.kana) || {};

       return (
         <div
           key={index}
           className="character-container"
           onClick={() => testProgressUpdate(char.kana)} // Added for testing - comment this and below out to remove the test functionality
           style={{ cursor: 'pointer' }} // Visual indication it's clickable
         >
           <p>
             <span className="kana">{type === 'kanji' ? char.kanji : char.kana}</span>
             <span className="romaji">{type === 'kanji' ? char.meaning : char.romaji}</span>
           </p>
           <div className="progress-info">
             <span>Level: {progressData.level || 'Wood'}</span>
             <span>Progress: {progressData.progress || 0}</span>
           </div>
           <div className="progress-bar">
             <div
               className="progress"
               style={{
                 width: `${(progressData.progress || 0) % 100}%`
               }}
             ></div>
           </div>
         </div>
       );
     })}
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
