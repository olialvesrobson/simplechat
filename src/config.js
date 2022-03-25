import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyB1O2GJHV1utj_HQJRFIY6ePKDoYChC90Y",
    authDomain: "travelers-5ee8e.firebaseapp.com",
    databaseURL: "https://travelers-5ee8e.firebaseio.com",
    projectId: "travelers-5ee8e",
    storageBucket: "travelers-5ee8e.appspot.com",
    messagingSenderId: "330931251010",
    appId: "1:330931251010:web:90178b86ee24422f"
  });
}else {
  firebase.app(); // if already initialized, use that one
}


const auth = firebase.auth();
const firestore = firebase.firestore();

export {firebase, auth, firestore}