const DB_NAME = 'NihoLearnDB';
const DB_VERSION = 1;
const STORE_NAME = 'characterProgress';

// Initialize the database
const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      reject(new Error('Failed to open database'));
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'character' });
        store.createIndex('level', 'level');
        store.createIndex('progress', 'progress');
        store.createIndex('lastPracticed', 'lastPracticed');
      }
    };
  });
};

// Generic database operation wrapper
const withDB = async (operation) => {
  const db = await initDB();
  try {
    return await operation(db);
  } finally {
    db.close();
  }
};

// Get all character progress
export const getAllProgress = () => {
  return withDB(db => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  });
};

// Update or add character progress
export const updateProgress = (characterData) => {
  return withDB(db => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(characterData);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  });
};

// Get progress for a specific character
export const getCharacterProgress = (character) => {
  return withDB(db => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(character);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  });
};
