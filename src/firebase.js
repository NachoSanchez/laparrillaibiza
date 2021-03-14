import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAjcfsD2EEvniOFCFgyaYmH4hAZvmQCFdY",
    authDomain: "laparrillaibiza-29418.firebaseapp.com",
    databaseURL: "https://laparrillaibiza-29418.firebaseio.com",
    projectId: "laparrillaibiza-29418",
    storageBucket: "laparrillaibiza-29418.appspot.com",
    messagingSenderId: "300129366996",
    appId: "1:300129366996:web:682c5418308a7503f39c41",
    measurementId: "G-7RG37Y7FCK"
};
  // Initialize Firebase
const fb = () => firebase.initializeApp(firebaseConfig);
//firebase.analytics();
fb();

export const db = firebase.firestore();