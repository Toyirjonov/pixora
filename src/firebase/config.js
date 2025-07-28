import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoe7woGaMluuWlIGTtDgTMrRrzYUjsfws",
  authDomain: "toyirjonov-project.firebaseapp.com",
  projectId: "toyirjonov-project",
  storageBucket: "toyirjonov-project.firebasestorage.app",
  messagingSenderId: "219590277204",
  appId: "1:219590277204:web:4efe53d888fd3756c895c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth();
