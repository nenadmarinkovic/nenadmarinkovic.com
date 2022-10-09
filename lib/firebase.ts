import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD8J3KXuY1Vqj5if9bciypEiQ7RnfpuGMQ",
  authDomain: "nenad-marinkovic.firebaseapp.com",
  projectId: "nenad-marinkovic",
  storageBucket: "nenad-marinkovic.appspot.com",
  messagingSenderId: "697659914679",
  appId: "1:697659914679:web:31ecbb0935e59e23219032",
  measurementId: "G-54KLXK121W",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, "notification_received");

export { app, analytics };
