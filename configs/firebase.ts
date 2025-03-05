// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGhFgQrmEARg3SSZ2SfrT3wGrtbNOtZ2Q",
  authDomain: "raspmonitor-58c92.firebaseapp.com",
  projectId: "raspmonitor-58c92",
  storageBucket: "raspmonitor-58c92.firebasestorage.app",
  messagingSenderId: "248416743629",
  appId: "1:248416743629:web:3e593319d857a22e85b984",
  measurementId: "G-WENMJJFX0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export {
  app,
  auth
};