import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBDAZkDPK-bUjK9iH3UCQ15wjxYmGnfJgM",
  authDomain: "wakeup-store.firebaseapp.com",
  projectId: "wakeup-store",
  storageBucket: "wakeup-store.appspot.com",
  messagingSenderId: "58352480192",
  appId: "1:58352480192:web:7ad3fc874be9bb47eaa225"
};

// Inicializa Firebase

export const appfire = initializeApp(firebaseConfig);

// Base de Datos de Firebase
export const db = getFirestore(appfire);

// Servicio de Autorizacion de Firebase
export const auth = getAuth(appfire);

export const crearUser = createUserWithEmailAndPassword;

export const userLogin = signInWithEmailAndPassword;











