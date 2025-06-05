/**
 * Utility functions for fetching and processing kanji data from kanjiapi.dev
 */

/**
 * Fetches the list of Jōyō kanji (general-use kanji)
 * @returns {Promise<string[]>} Promise resolving to array of kanji characters
 */
export const fetchJoyoKanjiList = async () => {
  try {
    const response = await fetch('https://kanjiapi.dev/v1/kanji/joyo');
    if (!response.ok) {
      throw new Error(`Failed to fetch Jōyō kanji: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching Jōyō kanji list:', error);
    return [];
  }
};

/**
 * Fetches detailed information for a specific kanji
 * @param {string} kanji - The kanji character to fetch details for
 * @returns {Promise<Object>} Promise resolving to kanji details
 */
export const fetchKanjiDetails = async (kanji) => {
  try {
    const response = await fetch(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(kanji)}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch kanji details: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching details for kanji ${kanji}:`, error);
    return null;
  }
};

/**
 * Gets the most common N kanji based on frequency data
 * @param {number} limit - Number of kanji to return (default: 500)
 * @returns {Promise<Array>} Promise resolving to array of kanji objects
 */
export const fetchTopKanji = async (limit = 500) => {
  // First get the Jōyō kanji list
  const joyoKanji = await fetchJoyoKanjiList();

  // Fetch details for the first 500 kanji (or specified limit)
  // This might take some time due to API rate limits
  const kanjiDetailsPromises = joyoKanji.slice(0, limit).map(kanji =>
    fetchKanjiDetails(kanji)
  );

  // Wait for all promises to resolve
  const kanjiDetails = await Promise.all(kanjiDetailsPromises);

  // Filter out any nulls (failed requests) and sort by frequency
  const validKanjiDetails = kanjiDetails
    .filter(details => details !== null)
    .sort((a, b) => {
      // Sort by grade level first (lower grade = more common)
      if (a.grade !== b.grade) {
        return (a.grade || 999) - (b.grade || 999);
      }

      // Then by newspaper frequency if available
      const freqA = a.freq || Number.MAX_SAFE_INTEGER;
      const freqB = b.freq || Number.MAX_SAFE_INTEGER;
      return freqA - freqB;
    });

  // Format the data for our app
  return validKanjiDetails.map(kanji => ({
    kanji: kanji.kanji,
    meaning: kanji.meanings[0] || 'unknown',
    grade: kanji.grade,
    frequency: kanji.freq
  }));
};

/**
 * Cache the kanji data in localStorage to avoid excessive API calls
 * @param {Array} kanjiData - The kanji data to cache
 */
export const cacheKanjiData = (kanjiData) => {
  try {
    localStorage.setItem('cachedKanjiData', JSON.stringify({
      timestamp: new Date().getTime(),
      data: kanjiData
    }));
  } catch (error) {
    console.error('Error caching kanji data:', error);
  }
};

/**
 * Get kanji data from cache if it exists and is not expired
 * @param {number} maxAge - Maximum age of cache in milliseconds (default: 1 day)
 * @returns {Array|null} - Kanji data or null if cache doesn't exist or is expired
 */
export const getKanjiDataFromCache = (maxAge = 24 * 60 * 60 * 1000) => {
  try {
    const cached = localStorage.getItem('cachedKanjiData');
    if (!cached) return null;

    const { timestamp, data } = JSON.parse(cached);
    const now = new Date().getTime();

    // Return data if cache is not expired
    if (now - timestamp < maxAge) {
      return data;
    }
    return null;
  } catch (error) {
    console.error('Error reading kanji cache:', error);
    return null;
  }
};

