
const FIREBASE_DATABASE = firebase.database();
const FIREBASE_AUTH = firebase.auth();

const tName = document.getElementById("name_field");
const tGrade = document.getElementById("grade_field");
const tEmail = document.getElementById("email_field");
let tPassword = document.getElementById("password_field");
let tRePassword = document.getElementById("repassword_field");

let signUpButton = document.getElementById("signUpBtn");
let loginButton =document.getElementById("loginBtn");

loginButton.addEventListener("click", function(){
  window.location.href = "login.html";
});
console.log(tName.value);

signUpButton.addEventListener("click", e=> {
  //if fields are empty, then stop from creating account
  if ((tName.value==null) || (tEmail.value==null) || (tPassword.value==null) || (tGrade.value==null) || (tRePassword.value==null)){
    alert("Please fill out all fields.");
  }
  else{
  const EMAIL = tEmail.value;
  const PASSWORD = tPassword.value;
  const USERACC = {
    name: tName.value,
    grade: tGrade.value
  };


  if (tPassword.value == tRePassword.value){
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
    tPassword.value = "";
    tRePassword.value = "";
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
