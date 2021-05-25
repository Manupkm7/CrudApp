import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCU7EEIiYJQ0YHBxwnO1oEDLJ1FiuYik9Q",
    authDomain: "crud-firestore-b280a.firebaseapp.com",
    projectId: "crud-firestore-b280a",
    storageBucket: "crud-firestore-b280a.appspot.com",
    messagingSenderId: "700353502303",
    appId: "1:700353502303:web:50761bfcf67c7599b90fea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}