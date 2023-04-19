// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3nWtAfRglUznCpyohOAeubau7JB88gQ4",
  authDomain: "next-poc-am.firebaseapp.com",
  projectId: "next-poc-am",
  storageBucket: "next-poc-am.appspot.com",
  messagingSenderId: "546425099995",
  appId: "1:546425099995:web:b601a0e0f484eb1bcc5efe",
  measurementId: "G-6KP736DKRL"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
