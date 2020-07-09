import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAC5nQiBJbs43kv-qUgceDXWJrQSSy6IqM",
    authDomain: "crwn-db-ea469.firebaseapp.com",
    databaseURL: "https://crwn-db-ea469.firebaseio.com",
    projectId: "crwn-db-ea469",
    storageBucket: "crwn-db-ea469.appspot.com",
    messagingSenderId: "7458268327",
    appId: "1:7458268327:web:6b7ef702fac6279bd82782",
    measurementId: "G-73C0YPR9L3"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;