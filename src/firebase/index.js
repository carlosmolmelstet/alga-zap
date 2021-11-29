import firebase from "firebase";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBDpWEIuviHLzA8VQZWU3I_r0xhGIPLHkI",
  authDomain: "planning-b96eb.firebaseapp.com",
  projectId: "planning-b96eb",
  storageBucket: "planning-b96eb.appspot.com",
  messagingSenderId: "673898358644",
  appId: "1:673898358644:web:ee5b285e4d85690a106e21",
  measurementId: "G-KKS32ESZXZ"
})

export { firebase }

export const auth = firebase.auth
export const db = firebase.firestore()
