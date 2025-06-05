import { getAllProgress, updateProgress, getCharacterProgress } from './db/indexedDB';
import { HiraganaCharacters, KatakanaCharacters } from './data/characters';

const LEVELS = ['Wood', 'Stone', 'Iron', 'Gold', 'Platinum', 'Diamond', 'Master'];
const THRESHOLDS = [10, 25, 50, 100, 200, 400, 800];

/**
 * Initialize progression data for a character
 * @param {string} character - The character to initialize
 * @param {string} stageType - The stage type ('hiragana' or 'katakana')
 * @returns {Object} Character data object
 */
const initializeCharacterData = (character, stageType) => ({
  character,
  stageType,
  level: LEVELS[0],
  progress: 0,
  thresholds: THRESHOLDS,
  lastPracticed: null,
  successRate: 0,
  totalAttempts: 0
});

/**
 * Get progression data for a specific stage
 * @param {string} stageType - 'hiragana' or 'katakana'
 * @returns {Promise<Object>} Promise resolving to progression data
 */
export const getProgression = async (stageType) => {
  try {
    // Get all progress data from the database
    let progress = await getAllProgress();

    // Filter by stageType if provided
    if (stageType) {
      progress = progress.filter(p => p.stageType === stageType);
    }

    // Determine which character set to use
    const characterSet = stageType === 'katakana' ? KatakanaCharacters : HiraganaCharacters;

    // If no data exists for this stage, initialize it
    if (!progress || progress.length === 0) {
      progress = await Promise.all(
        characterSet.map(async (char) => {
          const charKey = stageType === 'katakana' ? char.kana : char.kana;
          const data = initializeCharacterData(charKey, stageType);
          await updateProgress(data);
          return data;
        })
      );
    }

    return { characters: progress };
  } catch (error) {
    console.error(`Error getting ${stageType} progression:`, error);
    return { characters: [] };
  }
};

/**
 * Update character progress
 * @param {string} character - The character to update
 * @param {number} points - Points to add
 * @param {string} stageType - 'hiragana' or 'katakana'
 * @returns {Promise<Object>} Promise resolving to updated progression data
 */
export const updateCharacterProgress = async (character, points, stageType) => {
  try {
    // Get existing data for this character
    let charData = await getCharacterProgress(character);

    // If no data exists, initialize it
    if (!charData) {
      charData = initializeCharacterData(character, stageType);
    }

    // Update progress
    charData.progress += points;
    charData.lastPracticed = new Date().toISOString();
    charData.totalAttempts++;

    // Calculate new level
    const nextThresholdIndex = charData.thresholds.findIndex(t => charData.progress < t);
    charData.level = nextThresholdIndex === -1 ?
      LEVELS[LEVELS.length - 1] :
      LEVELS[nextThresholdIndex];

    // Save updated progress
    await updateProgress(charData);

    // Return updated progression for this stage
    return await getProgression(stageType);
  } catch (error) {
    console.error(`Error updating ${stageType} character progress:`, error);
    return null;
  }
};

// Export level and threshold constants
export { LEVELS, THRESHOLDS };
