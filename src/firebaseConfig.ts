import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBJkXUx5cDn2PE7uQeYndM7bBcIVs84n8M',
  authDomain: 'preplay-6ae03.firebaseapp.com',
  projectId: 'preplay-6ae03',
  storageBucket: 'preplay-6ae03.appspot.com',
  messagingSenderId: '551056875384',
  appId: '1:551056875384:web:3eaad5ac72aefb7c1f728d',
  measurementId: 'G-WJBTLXY8C7',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
