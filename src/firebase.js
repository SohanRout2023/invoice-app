import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCexYf7ny2Loi98UfIp-tNSoSqpEjOYswY",
  authDomain: "invoice-app-11338.firebaseapp.com",
  projectId: "invoice-app-11338",
  storageBucket: "invoice-app-11338.appspot.com",
  messagingSenderId: "311023761997",
  appId: "1:311023761997:web:f2e5f873bbbf954908fa04",
  measurementId: "G-ZGWB92CS3Y"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
