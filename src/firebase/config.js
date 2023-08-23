// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY4qBXhUlUyjI-TY7wqQ_KVlavcAAvfok",
  authDomain: "react-cursos-6dba3.firebaseapp.com",
  projectId: "react-cursos-6dba3",
  storageBucket: "react-cursos-6dba3.appspot.com",
  messagingSenderId: "464704878143",
  appId: "1:464704878143:web:8d414a033176885c08aa8a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

// Auth
export const FirebaseAuth = getAuth( FirebaseApp )

// Database o cloud store
export const FirebaseDB = getFirestore( FirebaseApp )