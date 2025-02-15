// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALf_jthNejUPls7GX2Y_ljWckYsRwWIjU",
  authDomain: "job-application-tracker-d4cd3.firebaseapp.com",
  projectId: "job-application-tracker-d4cd3",
  storageBucket: "job-application-tracker-d4cd3.firebasestorage.app",
  messagingSenderId: "881612462599",
  appId: "1:881612462599:web:fbf95f60fb8a22e1f828a2",
  measurementId: "G-ZL9HMJDTMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export  { app,analytics,  auth };