import { HiraganaCharacters } from './data/characters';
import { getAllProgress, updateProgress, getCharacterProgress } from './db/indexedDB';

const LEVELS = ['Wood', 'Stone', 'Iron', 'Gold', 'Platinum', 'Diamond', 'Master'];
const THRESHOLDS = [10, 25, 50, 100, 200, 400, 800];

// Initialize progression data for a character
const initializeCharacterData = (kana) => ({
  character: kana,
  level: LEVELS[0],
  progress: 0,
  thresholds: THRESHOLDS,
  lastPracticed: null,
  successRate: 0,
  totalAttempts: 0
});

// Initialize or get all character progress
export const getProgression = async () => {
  try {
    let progress = await getAllProgress();

    // If no data exists, initialize it
    if (!progress || progress.length === 0) {
      progress = await Promise.all(
        HiraganaCharacters.map(async (char) => {
          const data = initializeCharacterData(char.kana);
          await updateProgress(data);
          return data;
        })
      );
    }

    return { characters: progress };
  } catch (error) {
    console.error('Error getting progression:', error);
    return { characters: [] };
  }
};

// Update character progress
export const updateCharacterProgress = async (character, points) => {
  try {
    let charData = await getCharacterProgress(character);

    if (!charData) {
      charData = initializeCharacterData(character);
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
    return await getProgression();
  } catch (error) {
    console.error('Error updating character progress:', error);
    return null;
  }
};

// Export initial progression
export default await getProgression();
