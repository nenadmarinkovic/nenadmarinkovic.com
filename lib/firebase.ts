// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8J3KXuY1Vqj5if9bciypEiQ7RnfpuGMQ",
  authDomain: "nenad-marinkovic.firebaseapp.com",
  projectId: "nenad-marinkovic",
  storageBucket: "nenad-marinkovic.appspot.com",
  messagingSenderId: "697659914679",
  appId: "1:697659914679:web:31ecbb0935e59e23219032",
  measurementId: "G-0K713VRZP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);