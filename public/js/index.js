var signUpButtona = document.getElementById("signup");

signUpButtona.addEventListener("click", function(){
  window.location.href = "signUpLogin.html";
});

var loginButtona = document.getElementById("loginbtn");

loginButtona.addEventListener("click", function(){
  window.location.href = "signUpLogin.html";
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);
  } else {
    console.log("no user");
  }
});
