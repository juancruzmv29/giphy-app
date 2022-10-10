// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwMgiPw-HE35r3FL4DkNBNIHv1ym3h9yY",
  authDomain: "giphy-app-1aef3.firebaseapp.com",
  projectId: "giphy-app-1aef3",
  storageBucket: "giphy-app-1aef3.appspot.com",
  messagingSenderId: "1047857717858",
  appId: "1:1047857717858:web:c87a631dcabf04ec96273b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Inicializamos la db
const db = getFirestore(app)
// Inicializamos la auth
const auth = getAuth(app)

// Exportamos la auth y la db
export { auth, db }

