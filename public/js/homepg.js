function opennav(){
  document.getElementById("sidenav").style.width= "250px";
}
function closenav(){
  document.getElementById("sidenav").style.width= "0px";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var c = document.getElementsByClassName("caption");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
     c[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  c[slideIndex-1].style.display = "block";
}
