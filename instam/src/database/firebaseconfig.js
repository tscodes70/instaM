// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyCgB3jUKCqT9ocP3lMI-vnin6N10-pk0",
  authDomain: "instantmessaging-9f00b.firebaseapp.com",
  projectId: "instantmessaging-9f00b",
  storageBucket: "instantmessaging-9f00b.appspot.com",
  messagingSenderId: "481305242455",
  appId: "1:481305242455:web:0a7bcdf22b6dbfd4eeac12",
  measurementId: "G-8PSGYWX5VP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exports
export const auth = getAuth(app);
export const db = getFirestore(app);
