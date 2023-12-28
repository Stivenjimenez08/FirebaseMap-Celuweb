// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNFMpKoaSeAcRpubvKTwXXx8iNLZNJ5xE",
  authDomain: "prueba2-9e94f.firebaseapp.com",
  projectId: "prueba2-9e94f",
  storageBucket: "prueba2-9e94f.appspot.com",
  messagingSenderId: "508162139185",
  appId: "1:508162139185:web:3512c966801feca1d96110"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );