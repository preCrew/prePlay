import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDGzDm270bSsGoaCZtrKOmgjXGZ0z1StgI',
  authDomain: 'preplay2-90258.firebaseapp.com',
  projectId: 'preplay2-90258',
  storageBucket: 'preplay2-90258.appspot.com',
  messagingSenderId: '167625604788',
  appId: '1:167625604788:web:8d81da87c34e5eb7dfe1e1',
  measurementId: 'G-LX9EHVQLVV',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
