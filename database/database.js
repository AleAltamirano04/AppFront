// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjOt5Cu3fRIEe4DK9Q5uU8OpxbQ3U46aA",
    authDomain: "basepy-99d3f.firebaseapp.com",
    projectId: "basepy-99d3f",
    storageBucket: "basepy-99d3f.appspot.com",
    messagingSenderId: "749312728470",
    appId: "1:749312728470:web:a1d4fb7f7ebf6a059b91b7"
};

// Initialize Firebase
const dataBase = initializeApp(firebaseConfig);

export default dataBase