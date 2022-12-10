/*
The configuration of the Firebase
 */


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf1pFf7qNB0AS80e_iUVyHY37eYncRA7c",
  authDomain: "test-app-961ac.firebaseapp.com",
  projectId: "test-app-961ac",
  storageBucket: "test-app-961ac.appspot.com",
  messagingSenderId: "551104753371",
  appId: "1:551104753371:web:23f05a1766cd668dca26fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;