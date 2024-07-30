// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from "@firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq7pEVxgi7QVCvWcDwA4LeON0dNLEk2yQ",
  authDomain: "carbooking-e0632.firebaseapp.com",
  projectId: "carbooking-e0632",
  storageBucket: "carbooking-e0632.appspot.com",
  messagingSenderId: "20017135168",
  appId: "1:20017135168:web:37d2250dd9e40fb954a9a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const db = getFirestore();
export const auth = getAuth(app);



