import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAE_3hspRLjadz36p2m9hLWwsZe_IDMrts",
  authDomain: "cvam-tinder.firebaseapp.com",
  databaseURL: "https://cvam-tinder.firebaseio.com",
  projectId: "cvam-tinder",
  storageBucket: "cvam-tinder.appspot.com",
  messagingSenderId: "480135668831",
  appId: "1:480135668831:web:0a83b2d04f83c23a4967ea",
  measurementId: "G-CDND6Y8W56",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const databse = firebase.firestore();

export default databse;
