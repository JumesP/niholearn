import { getProgression as getProgressionData, updateCharacterProgress as updateProgress } from './progressionHandler';

// Get progression for Katakana (Stage 2)
export const getProgression = async () => {
  return await getProgressionData('katakana');
};

// Update character progress for Katakana (Stage 2)
export const updateCharacterProgress = async (character, points) => {
  console.log(`Updating katakana character: ${character} with ${points} points`);
  return await updateProgress(character, points, 'katakana');
};

// Initialize progression data but don't block the module export
let progressionData = { characters: [] };

// Load progression data asynchronously
(async () => {
  try {
    progressionData = await getProgression();
    console.log('Katakana progression data loaded:', progressionData.characters.length, 'characters');
  } catch (error) {
    console.error('Failed to load initial katakana progression data:', error);
  }
})();

// Export default progression without awaiting
export default progressionData;
