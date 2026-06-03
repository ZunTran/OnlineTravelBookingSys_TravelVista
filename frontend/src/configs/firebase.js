// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_p-NV4H2qUGPqwS-j9vvBxDL03PinzJI",
    authDomain: "travelvista-6fea1.firebaseapp.com",
    databaseURL: "https://travelvista-6fea1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "travelvista-6fea1",
    storageBucket: "travelvista-6fea1.firebasestorage.app",
    messagingSenderId: "1072978150501",
    appId: "1:1072978150501:web:850c63e22f6e38068d728c",
    measurementId: "G-5TPKKQWQ9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const realtimeDb = getDatabase(app);
export const firebaseAuth = getAuth(app);