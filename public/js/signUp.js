
const FIREBASE_DATABASE = firebase.database();
const FIREBASE_AUTH = firebase.auth();

const signtName = document.getElementById("name_field");
const signtGrade = document.getElementById("grade_field");
const signtEmail = document.getElementById("email_field");
let signtPassword = document.getElementById("password_field");
let signtRePassword = document.getElementById("repassword_field");

let signUpButton = document.getElementById("signUpBtn");
let loginButton =document.getElementById("loginBtn");

loginButton.addEventListener("click", function(){
  window.location.href = "login.html";
});

console.log(signtName);
signUpButton.addEventListener("click", e=> {
  //if fields are empty, then stop from creating account
  if ((signtName==null) || (signtEmail==null) || (signtPassword=null) || (signtGrade==null) || (signtRePassword==null)){
    alert("Please fill out all fields.");
  }
  else{
  const EMAIL = signtEmail.value;
  const PASSWORD = signtPassword.value;
  const USERACC = {
    name: signtName.value,
    grade: signtGrade.value
  };


  if (signtPassword.value == signtRePassword.value){
    FIREBASE_AUTH.createUserWithEmailAndPassword(EMAIL, PASSWORD).then(function(){
      let id = createId();
      FIREBASE_DATABASE.ref("users/" + id).set(USERACC).then(
      function(){
            console.log("created");
      });
    });
    window.location.href = "homepg.html";
  }

  else{
    alert("Passwords don't match.");
    signtPassword.value = "";
    signtRePassword.value = "";
  }
}
});


function createId(){
  let id = Math.floor(Math.random() * 10001);
  // allUsers = [];
  // FIREBASE_DATABASE.ref("users").once("value")
  //   .then((snapshot) => {
  //     let val = snapshot.val();
  //     for (let key in val){
  //       allUsers.push(key);
  //     }
  // for (let i = 0; i < allUsers.length; i++){
  //   if (allUsers[i] == id)
  //   {
  //     id = Math.floor(Math.random() * 10001);
  //     break;
  //   }
  // }
  //     console.log(id);
      return id;
  // });
}

//login stuff

let logtEmail = document.getElementById("email_field");
let logtPassword = document.getElementById("password_field");

loginButton.addEventListener("click", function(){
  const email = logtEmail.value;
  const pass = logtPassword.value;

  FIREBASE_AUTH.signInWithEmailAndPassword(email, pass)
    .then(function(){
      console.log("login successful");
      // window.location.href = "homepg.html";
    });
});
