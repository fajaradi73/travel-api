// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH-I6nYFYi-EMhyoJHu1oyLA3aEJ97eSQ",
  authDomain: "travels-api-dd92d.firebaseapp.com",
  projectId: "travels-api-dd92d",
  storageBucket: "travels-api-dd92d.appspot.com",
  messagingSenderId: "214809555326",
  appId: "1:214809555326:web:899ee0a2219bc22dae432f",
  measurementId: "G-K712354LNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);