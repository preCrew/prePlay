import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCiW3_U5GETxnD1clM3Yb3F_CHzXBs-D5I',
  authDomain: 'preplay-355d9.firebaseapp.com',
  projectId: 'preplay-355d9',
  storageBucket: 'preplay-355d9.appspot.com',
  messagingSenderId: '260528451404',
  appId: '1:260528451404:web:ca06e37c08b7dba7dc69e9',
  measurementId: 'G-D701S5Q6ZF',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
