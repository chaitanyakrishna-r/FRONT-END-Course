// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUJPGIQJY0BEt9l3dgTirtsbiYh_0P7ec",
  authDomain: "vitecontact-7919b.firebaseapp.com",
  projectId: "vitecontact-7919b",
  storageBucket: "vitecontact-7919b.firebasestorage.app",
  messagingSenderId: "796036094997",
  appId: "1:796036094997:web:2dbbe5486c7d3ab0de421c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);