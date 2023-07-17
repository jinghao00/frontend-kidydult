import { getAuth } from "@firebase/auth";
import { getMessaging } from "@firebase/messaging";
import { initializeApp } from "firebase/app";
console.log(process.env.FIREBASE_API_KEY);
console.log(process.env.FIREBASE_AUTH_DOMAIN);
console.log(process.env.FIREBASE_PROJECT_ID);
console.log(process.env.FIREBASE_STORAGE_BUCKET);
console.log(process.env.FIREBASE_MESSAGING_SENDER_ID);
console.log(process.env.FIREBASE_APP_ID);
console.log(process.env.FIREBASE_MEASUREMENT_ID);

const firebaseConfig = {
  apiKey: "AIzaSyCmtR0imdH8AMw0KXc0Vrft0aagimbkfw0",
  authDomain: "test-kidydult.firebaseapp.com",
  projectId: "test-kidydult",
  storageBucket: "test-kidydult.appspot.com",
  messagingSenderId: "264084941629",
  appId: "1:264084941629:web:9b1fc5d672882e579f7354",
  measurementId: "G-TVB8G6P5FY",
};

export const app = initializeApp(firebaseConfig);
