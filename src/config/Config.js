import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAI1huTGf1zOVN-is6s-rABVDeqXz2f-1E",
    authDomain: "ayur-21st.firebaseapp.com",
    projectId: "ayur-21st",
    storageBucket: "ayur-21st.appspot.com",
    messagingSenderId: "113770754658",
    appId: "1:113770754658:web:5a175690b0e0a0b123d73b"
  };
  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const db=firebase.firestore();
  const storage=firebase.storage();
  export {auth,db,storage}