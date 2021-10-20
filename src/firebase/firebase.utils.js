import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBCj-ZA5fxD58DNlq0S_3OatGjzRUy1KvM",
    authDomain: "shop-db-378f6.firebaseapp.com",
    projectId: "shop-db-378f6",
    storageBucket: "shop-db-378f6.appspot.com",
    messagingSenderId: "722197781440",
    appId: "1:722197781440:web:47b20f07add003197b0625",
    measurementId: "G-DBW3DHSKGQ"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;