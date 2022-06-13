// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createuserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvr5pKc0MVVyvCnU_xmSXtCZX4Gu86pJk",
  authDomain: "login-auth-2b4bb.firebaseapp.com",
  projectId: "login-auth-2b4bb",
  storageBucket: "login-auth-2b4bb.appspot.com",
  messagingSenderId: "1007318645771",
  appId: "1:1007318645771:web:5ec3170e86418295405b0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup (email,password) {
    return createuserWithEmailAndPassword(auth,email,password);
}