// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBehl1OCmPZqfZ5ifCIdFvUlc8f8ANJcTU",
  authDomain: "codex-learning.firebaseapp.com",
  projectId: "codex-learning",
  storageBucket: "codex-learning.appspot.com",
  messagingSenderId: "314873994957",
  appId: "1:314873994957:web:4b26321c86aa0413df9384",
  measurementId: "G-BEHLPLM4QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);