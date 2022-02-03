import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpPDNgRXBED519fx4ZwOMEfF4kjVLozHs",

  authDomain: "instagram-application-a137c.firebaseapp.com",

  projectId: "instagram-application-a137c",

  storageBucket: "instagram-application-a137c.appspot.com",

  messagingSenderId: "649532693383",

  appId: "1:649532693383:web:4ec39c7c1ca7833a541122",

  measurementId: "G-XDRWM5KD26",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
