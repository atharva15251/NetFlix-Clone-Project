// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbXjr2pacvfEfmZMwnaeQV6SxhOGBo6og",
  authDomain: "netflix-clone-project-5e274.firebaseapp.com",
  projectId: "netflix-clone-project-5e274",
  storageBucket: "netflix-clone-project-5e274.firebasestorage.app",
  messagingSenderId: "388044594772",
  appId: "1:388044594772:web:7097e56228d9df8122d7c1",
  measurementId: "G-5TGZ5JK6M4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();