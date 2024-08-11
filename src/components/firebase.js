// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcYqwqCxTLttePpPenUpdIXQfmwwmTEqU",
  authDomain: "organizeit-scheduler.firebaseapp.com",
  projectId: "organizeit-scheduler",
  storageBucket: "organizeit-scheduler.appspot.com",
  messagingSenderId: "1097761620814",
  appId: "1:1097761620814:web:f2d4fa9546ef0fc2fe941f",
  measurementId: "G-FBWEGMLVD4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
