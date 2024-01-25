// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDAZkDPK-bUjK9iH3UCQ15wjxYmGnfJgM",
  authDomain: "wakeup-store.firebaseapp.com",
  projectId: "wakeup-store",
  storageBucket: "wakeup-store.appspot.com",
  messagingSenderId: "58352480192",
  appId: "1:58352480192:web:7ad3fc874be9bb47eaa225"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app); 

