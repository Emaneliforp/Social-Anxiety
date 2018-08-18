const FIREBASE_DATABASE = firebase.database();
const FIREBASE_AUTH = firebase.auth();

let tEmail = document.getElementById("email_field");
let tPassword = document.getElementById("password_field");

let loginButton = document.getElementById("loginBtn");

loginButton.addEventListener("click", function(){
  const email = tEmail.value;
  const pass = tPassword.value;

  FIREBASE_AUTH.signInWithEmailAndPassword(email, pass)
    .then(function(){
      console.log("login successful");
      window.location.href = "homepg.html";
    });
});
