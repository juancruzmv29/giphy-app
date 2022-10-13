// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC35OYNidDW7GM2uaAL8A0Lf8cZW480iqg",
  authDomain: "giphy-app-e558d.firebaseapp.com",
  projectId: "giphy-app-e558d",
  storageBucket: "giphy-app-e558d.appspot.com",
  messagingSenderId: "67476358308",
  appId: "1:67476358308:web:f73e6b4531931a8a055231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Inicializamos la auth
const auth = getAuth(app)
// Inicializamos la db
// const db = getFirestore(app)


// Exportamos la auth y la db
export { auth }

