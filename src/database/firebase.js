// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export const firebaseConfig = {
  apiKey: "AIzaSyAVZEPYNrBHXXQX2U1Lgc42jlaD7srJY3w",
  authDomain: "todoapp-c304e.firebaseapp.com",
  databaseURL: "https://todoapp-c304e.firebaseio.com",
  projectId: "todoapp-c304e",
  storageBucket: "todoapp-c304e.appspot.com",
  messagingSenderId: "807507555617",
  appId: "1:807507555617:web:c23f43a1ea5ab2ce553a60",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default getFirestore();
