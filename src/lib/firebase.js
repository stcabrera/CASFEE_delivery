import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD5eL0FbYp6AETS8m_DOO-Kql4zdIH07lA",
    authDomain: "delivery-e1053.firebaseapp.com",
    databaseURL: "https://delivery-e1053.firebaseio.com",
    projectId: "delivery-e1053",
    storageBucket: "delivery-e1053.appspot.com",
    messagingSenderId: "87572494899",
    appId: "1:87572494899:web:2136e3c814e853e112c146"
});


const db = firebaseConfig.firestore();

export default db;

