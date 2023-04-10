// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAydKl0FCvukcy9BfRz-cASkgzOeQwwuRQ",
  authDomain: "academiaclientes.firebaseapp.com",
  projectId: "academiaclientes",
  storageBucket: "academiaclientes.appspot.com",
  messagingSenderId: "827446785294",
  appId: "1:827446785294:web:b23fddf026efc11b2a535f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const user = db.collection("usuarios")

export{db, user}
