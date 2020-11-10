import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDPmXRAGmCCrszodglyN50SeuLIjrWDuoE",
    authDomain: "convention-cards.firebaseapp.com",
    databaseURL: "https://convention-cards.firebaseio.com",
    projectId: "convention-cards",
    storageBucket: "convention-cards.appspot.com",
    messagingSenderId: "520581226225",
    appId: "1:520581226225:web:a3ed471f0c28b67706d350",
    measurementId: "G-7YP5GRDVB5"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;