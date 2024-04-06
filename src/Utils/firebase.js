// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj5HTMIMQFIVhS1qyr94PgJE-dl3-uwNo",
  authDomain: "netflixgpt-e21c7.firebaseapp.com",
  projectId: "netflixgpt-e21c7",
  storageBucket: "netflixgpt-e21c7.appspot.com",
  messagingSenderId: "868629069389",
  appId: "1:868629069389:web:230458d3adc6de2d48a604",
  measurementId: "G-KEQTVNBY3R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
