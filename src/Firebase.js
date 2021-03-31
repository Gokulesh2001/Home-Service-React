import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyACYvg-850qfRB-bVR0mqOM39n6WJ8wq8c",
    authDomain: "home-service-5b144.firebaseapp.com",
    projectId: "home-service-5b144",
    storageBucket: "home-service-5b144.appspot.com",
    messagingSenderId: "834313131490",
    appId: "1:834313131490:web:587d88fd1f8b67baf415bb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;