import firebase from 'firebase/app';
import  'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBCLqWOCpc4pyHs-dospJoWKltw95tqt3s",
    authDomain: "ecommerce-db-9c3e8.firebaseapp.com",
    projectId: "ecommerce-db-9c3e8",
    storageBucket: "ecommerce-db-9c3e8.appspot.com",
    messagingSenderId: "663699910992",
    appId: "1:663699910992:web:f9ea52acc9c668c96ffc55",
    measurementId: "G-NEQWKJN0GV"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;