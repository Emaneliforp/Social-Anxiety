
const FIREBASE_DATABASE = firebase.database();
const FIREBASE_AUTH = firebase.auth();

const tName = document.getElementById("name_field");
const tAge = document.getElementById("age_field");
const tEmail = document.getElementById("email_field");
const tPassword = document.getElementById("password_field");
const tRePassword = document.getElementById("repassword_field");

let signUpButton = document.getElementById("signUpBtn");


signUpButton.addEventListener("click", e=> {
  email = tEmail.value;
  pass = tPassword.value;
  const user = {
    name: tName.value,
    age: tAge.value
  };

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
