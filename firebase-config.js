// ============================================================
//  EVLAVIA CLUJ — Firebase Configuration
//  Înlocuiește valorile de mai jos cu cele din consola Firebase
//  după ce creezi proiectul (vezi GHID-FIREBASE.md)
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDtLNfazILwGHpyHe_4yvKK7mUAdeJAkh4",
  authDomain: "evlavia-cluj.firebaseapp.com",
  projectId: "evlavia-cluj",
  storageBucket: "evlavia-cluj.firebasestorage.app",
  messagingSenderId: "918756184791",
  appId: "1:918756184791:web:1679752fc700d6011dd692"
};

const app  = initializeApp(firebaseConfig);
const db   = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
