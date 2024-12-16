// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTnV4hxpSWQPuJUnETrXrBNfFYn5dLz3c",
    authDomain: "coffee-store-3988a.firebaseapp.com",
    projectId: "coffee-store-3988a",
    storageBucket: "coffee-store-3988a.firebasestorage.app",
    messagingSenderId: "78208905294",
    appId: "1:78208905294:web:edc6eec656ce06e042531f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;