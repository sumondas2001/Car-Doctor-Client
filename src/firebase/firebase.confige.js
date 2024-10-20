// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyAycYnN_iHtC385tx-Abjwshz1oh4aZdZw",
     authDomain: "cars-doctor-1ea5c.firebaseapp.com",
     projectId: "cars-doctor-1ea5c",
     storageBucket: "cars-doctor-1ea5c.appspot.com",
     messagingSenderId: "1210575825",
     appId: "1:1210575825:web:10049eeab96c803fca8ef0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;