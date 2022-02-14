import firebase from "firebase//app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQUMj3giwJWSjcijnCMU2XaTYWRPsIcXg",
    authDomain: "pagecyekids.firebaseapp.com",
    projectId: "pagecyekids",
    storageBucket: "pagecyekids.appspot.com",
    messagingSenderId: "711012351185",
    appId: "1:711012351185:web:04a494bb3c987eece9d9f0",
    measurementId: "G-4GCBJD6E9E"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export  const getFirebase = ()=> app;

  export const getFirestore =()=> firebase.firestore(app);
  