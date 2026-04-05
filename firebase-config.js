// ============================================================
//  EVLAVIA CLUJ — Firebase Configuration
//  Înlocuiește valorile de mai jos cu cele din consola Firebase
//  după ce creezi proiectul (vezi GHID-FIREBASE.md)
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey:            "PUNE_API_KEY_AICI",
  authDomain:        "PUNE_AUTH_DOMAIN_AICI",
  projectId:         "PUNE_PROJECT_ID_AICI",
  storageBucket:     "PUNE_STORAGE_BUCKET_AICI",
  messagingSenderId: "PUNE_MESSAGING_SENDER_ID_AICI",
  appId:             "PUNE_APP_ID_AICI"
};

const app  = initializeApp(firebaseConfig);
const db   = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
