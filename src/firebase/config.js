// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX5ahDcOCZyjKXaHuu_A3rZNqdkp_Me5Q",
  authDomain: "q-bing.firebaseapp.com",
  projectId: "q-bing",
  storageBucket: "q-bing.appspot.com",
  messagingSenderId: "73121210492",
  appId: "1:73121210492:web:fc4ec649fcea633536a9f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
