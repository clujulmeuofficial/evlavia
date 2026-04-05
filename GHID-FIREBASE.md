# 🔥 Ghid configurare Firebase — Evlavia Cluj

Urmează pașii de mai jos pas cu pas. Durează ~10 minute.

---

## PASUL 1 — Creează proiectul Firebase

1. Mergi la **https://console.firebase.google.com**
2. Autentifică-te cu un cont Google
3. Click **„Adaugă proiect"** (Add project)
4. Denumește proiectul: `evlavia-cluj`
5. Dezactivează Google Analytics (opțional) → **Creează proiectul**

---

## PASUL 2 — Activează Firestore Database

1. În meniu stânga → **Build → Firestore Database**
2. Click **„Create database"**
3. Alege **„Start in test mode"** (îl securizăm mai jos)
4. Alege locația: `europe-west3` (Frankfurt, cel mai aproape)
5. Click **„Enable"**

---

## PASUL 3 — Activează Authentication

1. În meniu stânga → **Build → Authentication**
2. Click **„Get started"**
3. Tab **Sign-in method** → activează **Email/Password**
4. Tab **Users** → click **„Add user"**
   - Email: adresa ta de admin (ex: `admin@evlaviacluj.ro`)
   - Parolă: alege una puternică
5. Click **„Add user"** → gata, acesta e contul de admin!

---

## PASUL 4 — Obține configurarea Firebase

1. În consola Firebase → click pe ⚙️ **Setări proiect** (sus stânga lângă „Project Overview")
2. Scroll jos la **„Your apps"** → click **`</>`** (Web)
3. Denumește app-ul: `evlavia-web` → click **„Register app"**
4. Copiază obiectul `firebaseConfig` care arată astfel:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "evlavia-cluj.firebaseapp.com",
  projectId: "evlavia-cluj",
  storageBucket: "evlavia-cluj.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

---

## PASUL 5 — Completează firebase-config.js

Deschide fișierul `firebase-config.js` din folderul site-ului și înlocuiește valorile:

```javascript
const firebaseConfig = {
  apiKey:            "PUNE_VALOAREA_DE_LA_FIREBASE",
  authDomain:        "PUNE_VALOAREA_DE_LA_FIREBASE",
  projectId:         "PUNE_VALOAREA_DE_LA_FIREBASE",
  storageBucket:     "PUNE_VALOAREA_DE_LA_FIREBASE",
  messagingSenderId: "PUNE_VALOAREA_DE_LA_FIREBASE",
  appId:             "PUNE_VALOAREA_DE_LA_FIREBASE"
};
```

---

## PASUL 6 — Regulile Firestore (Securitate)

1. În Firebase → **Firestore Database → Rules**
2. Înlocuiește regulile cu:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Anunțurile: oricine le poate citi, doar admins le pot scrie
    match /anunturi/{id} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // Mesajele de contact: oricine poate trimite, doar admins citesc
    match /mesaje/{id} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }

    // Setările YouTube: doar admins
    match /settings/{id} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

3. Click **„Publish"**

---

## PASUL 7 — YouTube API (pentru Arhivă Video)

1. Mergi la **https://console.cloud.google.com**
2. Selectează proiectul Firebase creat mai sus
3. **APIs & Services → Enable APIs** → caută **YouTube Data API v3** → activează
4. **APIs & Services → Credentials → Create Credentials → API Key**
5. Copiază API Key-ul generat
6. Mergi în site la **admin.html**, autentifică-te
7. Mergi la pagina **Arhivă Video** — vei vedea câmpurile pentru API Key și Channel ID
8. Channel ID-ul îl găsești pe YouTube: canal tău → About → Share → Copy channel ID

---

## PASUL 8 — Hosting (publicare site)

### Opțiunea A — Firebase Hosting (Recomandat, gratuit)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Opțiunea B — Netlify (super simplu)
1. Mergi la **https://netlify.com**
2. Drag & drop folderul `evlavia/` pe pagina lor
3. Site-ul e live instantaneu!

### Opțiunea C — cPanel / Hosting tradițional
Uploadează toate fișierele prin File Manager sau FTP.

---

## Structura fișierelor

```
evlavia/
├── index.html          ← Homepage cu anunțuri
├── live.html           ← Transmisie LIVE YouTube
├── arhiva.html         ← Arhivă video (auto YouTube)
├── despre.html         ← Despre noi
├── contact.html        ← Contact + hartă + formular
├── donatie.html        ← Donații
├── admin.html          ← Panou admin (login + CRUD)
├── style.css           ← Tot designul
└── firebase-config.js  ← Configurare Firebase ← EDITEAZĂ ASTA
```

---

## Cum adaugi un anunț (după setup)

1. Mergi la `site-ul-tau.ro/admin.html`
2. Autentifică-te cu email + parola setată la Pasul 3
3. Click **„+ Anunț nou"**
4. Completează titlu, descriere, și opțional un URL de imagine
5. Click **Adaugă** → apare instant pe homepage!

---

## ⚠️ Important

- **Nu** publica `firebase-config.js` cu cheia API expusă pe GitHub public
- Regulile Firestore de la Pasul 6 sunt esențiale pentru securitate
- Parola de admin: alege una puternică (min 12 caractere)

---

*Dacă ai întrebări, poți reveni cu detalii despre orice pas.*
