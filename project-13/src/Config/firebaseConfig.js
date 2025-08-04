import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDE69NlL7E30eNmCvxursivhwIsb1vP3WQ",
  authDomain: "movie-junction-web.firebaseapp.com",
  projectId: "movie-junction-web",
  storageBucket: "movie-junction-web.firebasestorage.app",
  messagingSenderId: "510319559136",
  appId: "1:510319559136:web:38f30b09688417df182b85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);