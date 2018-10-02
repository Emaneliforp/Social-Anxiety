var signUpButtona = document.getElementById("signup");

signUpButtona.addEventListener("click", function(){
  window.location.href = "signUpLogIn.html";
});

var loginButtona = document.getElementById("loginbtn");

loginButtona.addEventListener("click", function(){
  window.location.href = "signUpLogIn.html";
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);
  } else {
    console.log("no user");
  }
});
