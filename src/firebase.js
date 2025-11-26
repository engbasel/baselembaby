// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY9VUar0qtQp_HJDOmLF1LhFxmzcP-J7w",
  authDomain: "store-e1838.firebaseapp.com",
  projectId: "store-e1838",
  storageBucket: "store-e1838.appspot.com",
  messagingSenderId: "292894067063",
  appId: "1:292894067063:web:52df1db3a00dc5ea313972",
  measurementId: "G-04R04D1LJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export for use in other files
export { app, analytics, db, auth, storage };
