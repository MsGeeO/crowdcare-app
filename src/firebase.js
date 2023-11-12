// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth, initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfigBKP = {
  apiKey: "AIzaSyAPbi5-xdX8s3h7aK_0S38z1VjY4kfGSk4",
  authDomain: "crowd-care.firebaseapp.com",
  databaseURL: "https://crowd-care-default-rtdb.firebaseio.com",
  projectId: "crowd-care",
  storageBucket: "crowd-care.appspot.com",
  messagingSenderId: "457828323552",
  appId: "1:457828323552:web:71b6458d2dea63b0a68085",
  measurementId: "G-HX6P5JD5Y9",
};
const firebaseConfig = {
  apiKey: "AIzaSyDB9lm-NnnjHY5QKTIojSZyyzM7HgCI57w",
  authDomain: "deamykiel-ecommerce.firebaseapp.com",
  projectId: "deamykiel-ecommerce",
  storageBucket: "deamykiel-ecommerce.appspot.com",
  messagingSenderId: "11605753218",
  appId: "1:11605753218:web:fb79723f826b1e18ea239b",
  measurementId: "G-Z9RFLKQ76B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const db = getDatabase(app);
// const auth = initializeAuth(app);

export const auth = getAuth(app);
export const db = getDatabase(app);
