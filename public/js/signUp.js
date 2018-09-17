window.onload = function(){

const FIREBASE_DATABASE = firebase.database();
const FIREBASE_AUTH = firebase.auth();

//initialize firebase variables
let signUpButton = document.getElementById("signUpBtn");
let loginButton =document.getElementById("loginBtn");

signUpButton.addEventListener("click", e=> {
  //variables for input
  let signtName = document.getElementById("signname_field").value;
  let signtUsername = document.getElementById("signusername_field").value;
  let signtGrade = document.getElementById("signgrade_field").value;
  let signtEmail = document.getElementById("signemail_field").value;
  let signtPassword = document.getElementById("signpassword_field").value;
  let signtRePassword = document.getElementById("signrepassword_field").value;

  let signUpButton = document.getElementById("signUpBtn");
  let loginButton =document.getElementById("loginBtn");

// TODO: check if email exists

  //makes sure that values aren't empty
  if ((signtName) && (signtUsername) && (signtEmail) && (signtPassword) && (signtGrade) && (signtRePassword)){
    //for createUserWithEmailAndPassword
    const EMAIL = document.getElementById("signemail_field").value;
    const PASSWORD = document.getElementById("signpassword_field").value;
    //user object
    const USERACC = {
      name: document.getElementById("signname_field").value,
      grade: document.getElementById("signgrade_field").value
    };
    //create account and add to database
    if (signtPassword.value == signtRePassword.value){
      const promise = FIREBASE_AUTH.createUserWithEmailAndPassword(EMAIL, PASSWORD).then(function(user) {
        var usser = firebase.auth().currentUser;
        usser.updateProfile({
            displayName: document.getElementById("signusername_field").value
          }).then(function() {
            console.log("Success");
            // Update successful.
          }).catch(function(error) {
            // An error happened.
            console.log("Error");
          });
          console.log(user);
          let userId = FIREBASE_AUTH.currentUser.uid;
        //pushes user account into database
        FIREBASE_DATABASE.ref('users/'+ userId).set(USERACC).then(
              function() {
                  console.log('User data successfully stored');
              }).catch(function(error) {
                  console.log(error);
              });
      	});
        //catches errors
      	promise.catch(e => alert(e.message));
      	promise.then(function(v) {
          // window.location.href = "homepg.html";
          var user = firebase.auth().currentUser;
          console.log(user);
        });
      }

    else{
      //prevents users from proceeding without matching passwords
      document.getElementById("wrongPass").style.display="block";
      signtPassword.value = "";
      signtRePassword.value = "";
    }
  }
    //if fields are empty, then stop from creating account
  else{
    document.getElementById("fillFields").style.display="block";
  }
});

//login

let logtEmail = document.getElementById("logemail_field");
let logtPassword = document.getElementById("logpassword_field");

loginButton.addEventListener("click", function(){
  const EMAIL = logtEmail.value;
  const PASS = logtPassword.value;
  const PROMISE = FIREBASE_AUTH.signInWithEmailAndPassword(EMAIL, PASS)
        .then(function (user) {
            console.log("Success!");
            console.log(user);
            window.location.href="homepg.html";
        }).catch(e => {
            console.log(e.message);
            document.getElementById('wrong').style.display = "block";
        });;
/**
  const PROMISE =FIREBASE_AUTH.signInWithEmailAndPassword(email, pass)
    .then(function(user){
        console.log("login successful");
        console.log(user);

    }).catch(e => {
        console.log(e.message);
        document.getElementById("wrong").style.display = "block";
    });
    */
});
}
