// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC806aEFDA5SyVUoop67BUnHIgZitrKuU0",
  authDomain: "projek-web-kelas-506d6.firebaseapp.com",
  projectId: "projek-web-kelas-506d6",
  storageBucket: "projek-web-kelas-506d6.firebasestorage.app",
  messagingSenderId: "4130744726",
  appId: "1:4130744726:web:68d4d8e6ebce629e6295b7",
  measurementId: "G-6D1B2375G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();