import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


 const firebaseConfig = {
  apiKey: "AIzaSyDJ2GcYlUcl0gFPHpZG9uCx0utiZQeuyLg",
  authDomain: "app-sos-986b6.firebaseapp.com",  // Aquí el authDomain que obtuviste
  projectId: "app-sos-986b6",
  storageBucket: "app-sos-986b6.appspot.com",  // Aquí el storageBucket que obtuviste
  messagingSenderId: "339251971762",
  appId: "1:339251971762:android:0bd42ce77452f2f40aebab",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

