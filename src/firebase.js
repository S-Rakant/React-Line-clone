import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDXwtL_8CWH9ijBwhWEGrV4QrZhvkAqn9c",
    authDomain: "line-clone-app-react.firebaseapp.com",
    projectId: "line-clone-app-react",
    storageBucket: "line-clone-app-react.appspot.com",
    messagingSenderId: "172271687729",
    appId: "1:172271687729:web:f05d1a8092480702fb9d10"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };