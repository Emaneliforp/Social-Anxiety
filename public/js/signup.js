var config = {
    apiKey: "AIzaSyALS8vTpGCbeaPZRLs7VJ7auRxOLLYYbm0",
    authDomain: "waycac-d6733.firebaseapp.com",
    databaseURL: "https://waycac-d6733.firebaseio.com",
    projectId: "waycac-d6733",
    storageBucket: "waycac-d6733.appspot.com",
    messagingSenderId: "25285430457"
  };
  firebase.initializeApp(config);
const FIREBASE_DATABASE = firebase.database();
const FIREBASE_AUTH = firebase.auth();

const name = document.getElementById("name_field");
const age = document.getElementById("age_field");
const email = document.getElementById("email_field");
const password = document.getElementById("password_field");
