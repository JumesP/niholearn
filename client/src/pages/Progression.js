import React, { useState, useEffect } from 'react';
import { HiraganaCharacters, KatakanaCharacters } from '../util/data/characters';
import { getKanjiCharacters } from '../util/data/kanjiCharacters';
import { updateCharacterProgress as updateHiraganaProgress, getProgression as getHiraganaProgression } from '../util/progression-stage1';
import { updateCharacterProgress as updateKatakanaProgress, getProgression as getKatakanaProgression } from '../util/progression-stage2';
import './css/Progression.scss';

const Progression = () => {
  const [openDropdown, setOpenDropdown] = useState({
    hiragana: false,
    katakana: false,
    kanji: false,
  });
  const [hiraganaData, setHiraganaData] = useState({ characters: [] });
  const [katakanaData, setKatakanaData] = useState({ characters: [] });
  const [kanjiList, setKanjiList] = useState([]);

  useEffect(() => {
    loadCharacterData();
    // Get kanji characters - might be async loaded
    setKanjiList(getKanjiCharacters());

    // Update kanji list when it changes (might be loading from API)
    const interval = setInterval(() => {
      const currentKanji = getKanjiCharacters();
      if (currentKanji.length > kanjiList.length) {
        setKanjiList(currentKanji);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const loadCharacterData = async () => {
    // Load both hiragana and katakana data
    const hiraganaData = await getHiraganaProgression();
    const katakanaData = await getKatakanaProgression();

    setHiraganaData(hiraganaData);
    setKatakanaData(katakanaData);

    console.log('Loaded progression data:', {
      hiragana: hiraganaData.characters.length,
      katakana: katakanaData.characters.length
    });
  };

  // Test function to update character progress
  const testProgressUpdate = async (character, type) => {
    console.log(`Testing progress update for ${type} character:`, character);

    if (type === 'hiragana') {
      await updateHiraganaProgress(character, 5);
    } else if (type === 'katakana') {
      await updateKatakanaProgress(character, 5);
    }

    await loadCharacterData(); // Reload the data to see changes
  };

  const toggleDropdown = (language) => {
    console.log("dropdown toggled for:", language);
    setOpenDropdown((prev) => ({
      ...prev,
      [language]: !prev[language],
    }));
  };

  const renderCharacters = (characters, type) => {
    const calculateProgressPercentage = (progress, thresholds) => {
      const currentThreshold = thresholds.find(t => progress < t) || thresholds[thresholds.length - 1];
      const previousThreshold = thresholds[thresholds.indexOf(currentThreshold) - 1] || 0;
      const progressInLevel = progress - previousThreshold;
      const levelRange = currentThreshold - previousThreshold;
      return Math.min((progressInLevel / levelRange) * 100, 100);
    };

    // Function to determine level based on progress
    const getLevelFromProgress = (progress) => {
      if (progress >= 400) return "5"; // Mastered
      if (progress >= 200) return "4"; // Advanced
      if (progress >= 100) return "3"; // Intermediate
      if (progress >= 50) return "2";  // Basic recognition
      if (progress >= 10) return "1";  // Just started
      return "0";                      // Not started
    };

    // Get the correct progression data based on type
    const characterData = type === 'katakana' ? katakanaData : hiraganaData;

    return (
      <div className={`dropdown-content ${openDropdown[type] ? 'open' : ''}`}>
        {characters.map((char, index) => {
          const charKey = type === 'kanji' ? char.kanji : char.kana;
          const progressData = characterData.characters.find(c => c.character === charKey) || {};
          const progress = progressData.progress || 0;
          const percentage = calculateProgressPercentage(
            progressData.progress || 0,
            progressData.thresholds || [10, 25, 50, 100, 200, 400, 800]
          );

          // Determine the level for color coding
          const level = getLevelFromProgress(progress);

          return (
            <div
              key={index}
              className="character-container"
              onClick={() => testProgressUpdate(charKey, type)}
              style={{ cursor: 'pointer' }}
              data-level={level}
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
                    width: `${percentage}%`
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="progression-page">
      <h1>Character Progression</h1>
      <div>
        <div className="dropdown">
          <button onClick={() => toggleDropdown('hiragana')}>
            Hiragana ({HiraganaCharacters.length} characters) {openDropdown.hiragana ? '▼' : '▶'}
          </button>
          {renderCharacters(HiraganaCharacters, 'hiragana')}
        </div>
        <div className="dropdown">
          <button onClick={() => toggleDropdown('katakana')}>
            Katakana ({KatakanaCharacters.length} characters) {openDropdown.katakana ? '▼' : '▶'}
          </button>
          {renderCharacters(KatakanaCharacters, 'katakana')}
        </div>
        <div className="dropdown">
          <button onClick={() => toggleDropdown('kanji')}>
            Kanji ({kanjiList.length} characters) {openDropdown.kanji ? '▼' : '▶'}
          </button>
          {renderCharacters(kanjiList, 'kanji')}
        </div>
      </div>
    </div>
  );
};

export default Progression;
