import { basicKanji } from './kanji/basic';
import { commonKanji } from './kanji/common';
import { abstractKanji } from './kanji/abstract';
import { natureKanji } from './kanji/nature';
import {getKanjiDataFromCache, fetchTopKanji, cacheKanjiData} from './kanjiApi';

// Combine all kanji categories
export const HardcodedKanjiCharacters = [
    ...basicKanji,
    ...commonKanji,
    ...abstractKanji,
    ...natureKanji
];

// This will be populated with data from the API
let KanjiCharacters = [];

// Initialize kanji data - this will be executed when the file is imported
const initializeKanjiData = async () => {
  try {
    // First check if we have cached data
    const cachedData = getKanjiDataFromCache();
    if (cachedData && cachedData.length > 0) {
      KanjiCharacters = cachedData;
      console.log('Using cached kanji data', KanjiCharacters.length);
      return;
    }

    // If no cache, fetch from API
    console.log('Fetching kanji data from API...');
    const kanjiData = await fetchTopKanji(500);

    if (kanjiData && kanjiData.length > 0) {
      KanjiCharacters = kanjiData;
      // Cache the data for future use
      cacheKanjiData(kanjiData);
      console.log('Kanji data fetched and cached', kanjiData.length);
    } else {
      // Use fallback if API fails
      KanjiCharacters = HardcodedKanjiCharacters;
      console.log('Using fallback kanji data');
    }
  } catch (error) {
    console.error('Error initializing kanji data:', error);
    KanjiCharacters = HardcodedKanjiCharacters;
  }
};

// Initialize immediately
initializeKanjiData();

// Export a function to get kanji data
// This ensures we always return the latest data after async operations complete
export const getKanjiCharacters = () => KanjiCharacters;

// For compatibility with existing code
export { KanjiCharacters };

