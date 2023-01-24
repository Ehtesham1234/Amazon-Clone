// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDK4ws3OF6pRbngw9NGHyGBBK7ZKLdltwI",
  authDomain: "clone-6f6ee.firebaseapp.com",
  projectId: "clone-6f6ee",
  storageBucket: "clone-6f6ee.appspot.com",
  messagingSenderId: "536395119576",
  appId: "1:536395119576:web:4b899e05f5c7e82b58d0ad",
  measurementId: "G-WGSB08S7FY"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };