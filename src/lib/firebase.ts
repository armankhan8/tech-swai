import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyANfOwDzIqIJPKWjqXWGJ7rh5RaDCQsoa4",
  authDomain: "businesswebsite-as-freelancing.firebaseapp.com",
  projectId: "businesswebsite-as-freelancing",
  storageBucket: "businesswebsite-as-freelancing.firebasestorage.app",
  messagingSenderId: "1083132414607",
  appId: "1:1083132414607:web:d1033df5873656afeebefa",
  measurementId: "G-1FGWS3GGX6",
  databaseURL: "https://businesswebsite-as-freelancing-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const rtdb = getDatabase(app);
export const analytics = getAnalytics(app);

export default app;