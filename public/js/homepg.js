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
//skills modal control
let sp = document.getElementById('sp');
let shw = document.getElementById('shw');
let sof = document.getElementById('sof');
let sd = document.getElementById('sd');

let spmo = document.getElementById('spmo');
let shwmo = document.getElementById('shwmo');
let sdmo = document.getElementById('sdmo');

let spclose = document.getElementById('spclose');
let shwclose = document.getElementById('shwclose');
let sdclose = document.getElementById('sdclose');

sp.addEventListener('click', function () {
    spmo.style.display = 'block';
});
spclose.addEventListener('click', function () {
    spmo.style.display = "none";
});

shw.addEventListener('click', function () {
    shwmo.style.display = 'block';
});
shwclose.addEventListener('click', function () {
    shwmo.style.display = "none";
});

sd.addEventListener('click', function () {
    sdmo.style.display = 'block';
});
sdclose.addEventListener('click', function () {
    sdmo.style.display = "none";
});

//community modal control
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









var communityNavBtn = document.getElementById("communityNav");
communityNavBtn.addEventListener("click", function(){
  window.location.href="community.html";
});

var logoutBtn = document.getElementById("logoutNav");
logoutBtn.addEventListener("click", function(){
  firebase.auth().signOut()
  .then(function() {
    // Sign-out successful.
  })
  .catch(function(error) {
    // An error happened
  });
  
  console.log(user);
  // window.location.href="index.html";
});
