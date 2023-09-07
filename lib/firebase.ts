import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD40l1J84JAeuhxKg_f5ALsILvpWC47ijI",
  authDomain: "auth.nenadmarinkovic.com",
  projectId: "nenadmarinkovic",
  storageBucket: "nenadmarinkovic.appspot.com",
  messagingSenderId: "411345912214",
  appId: "1:411345912214:web:635f328a78d6fa9a81ddb7",
  measurementId: "G-B5J73ENCDS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
