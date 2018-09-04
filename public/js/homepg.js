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
  if (n > x.length) {slideIndex = 1};
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
     c[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  c[slideIndex-1].style.display = "block";
}
let phw = document.getElementById('phw');
let phw1 = document.getElementById('phw1');

let pmodal = document.getElementById('pmodal');
let pmodal1 = document.getElementById('pmodal1');

let close = document.getElementById('close');
let close1 = document.getElementById('close1');

phw.addEventListener('click', function () {
    pmodal.style.display = 'block';
});
close.addEventListener('click', function () {
    pmodal.style.display = "none";
});
phw1.addEventListener('click', function () {
    pmodal1.style.display = 'block';
});
close1.addEventListener('click', function () {
    pmodal1.style.display = "none";
});

let c = document.getElementById('c');
let c1 = document.getElementById('c1');

let cmodal = document.getElementById('cmodal');
let cmodal1 = document.getElementById('cmodal1');

let closec = document.getElementById('closec');
let closec1 = document.getElementById('closec1');

c.addEventListener('click', function () {
    cmodal.style.display = 'block';
});
closec.addEventListener('click', function () {
    cmodal.style.display = "none";
});
c1.addEventListener('click', function () {
    cmodal1.style.display = 'block';
});
closec1.addEventListener('click', function () {
    cmodal1.style.display = "none";
});