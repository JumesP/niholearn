import { getProgression as getProgressionData, updateCharacterProgress as updateProgress } from './progressionHandler';

// Get progression for Hiragana (Stage 1)
export const getProgression = async () => {
  return await getProgressionData('hiragana');
};

// Update character progress for Hiragana (Stage 1)
export const updateCharacterProgress = async (character, points) => {
  return await updateProgress(character, points, 'hiragana');
};

// Export default progression
export default await getProgression();
