
const FIREBASE_DATABASE = firebase.database();
const FIREBASE_AUTH = firebase.auth();
let signUpButton = document.getElementById("signUpBtn");
let loginButton =document.getElementById("loginBtn");


loginButton.addEventListener("click", function(){
  window.location.href = "login.html";
});

signUpButton.addEventListener("click", e=> {
  //variables for input
  let signtName = document.getElementById("name_field").value;
  let signtGrade = document.getElementById("grade_field").value;
  let signtEmail = document.getElementById("email_field").value;
  let signtPassword = document.getElementById("password_field").value;
  let signtRePassword = document.getElementById("repassword_field").value;

  let signUpButton = document.getElementById("signUpBtn");
  let loginButton =document.getElementById("loginBtn");
  //if fields are empty, then stop from creating account
  if ((signtName) && (signtEmail) && (signtPassword) && (signtGrade) && (signtRePassword)){
    const EMAIL = signtEmail.value;
    const PASSWORD = signtPassword.value;
    const USERACC = {
      name: signtName.value,
      grade: signtGrade.value
    };
    //create account and add to database
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
  else{
    alert("Please fill out all fields.");

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

function myFunction(){
  signtName = this.value;
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
