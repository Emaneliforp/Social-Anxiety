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

const tName = document.getElementById("name_field");
const tAge = document.getElementById("age_field");
const tEmail = document.getElementById("email_field");
const tPassword = document.getElementById("password_field");
const tRePassword = document.getElementById("repassword_field");
let signUpButton = "nah";

setTimeout(function(){
   signUpButton = document.getElementById("signUpBtn");

 }, 500);
setTimeout(function(){
  signUpButton.addEventListener("click", e=> {
    email = tEmail.value;
    pass = tPassword.value;
    const user = {
      name: tName.value,
      age: tAge.value
    };
    console.log("hello");
    if (tPassword.value == tRePassword.value){
      FIREBASE_AUTH.createUserWithEmailAndPassword(email, pass);
      FIREBASE_DATABASE.ref('users/' + user.uid).set(user);
      console.log("created");
    }
    else{
      alert("Passwords don't match.");
      tPass
    }
  });
}, 500);
