var signUpButtona = document.getElementById("signup");

signUpButtona.addEventListener("click", function(){
  window.location.href = "signUpNew.html";
});

var loginButtona = document.getElementById("loginbtn");

loginButtona.addEventListener("click", function(){
  window.location.href = "signUpNew.html";
});

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $("triangle-down").css("border-top", "100px solid yellow");

      }
      if ($(this).scrollTop() < 50) {
        $("triangle-down").css("border-top", "100px solid green");

      }
   });
});
