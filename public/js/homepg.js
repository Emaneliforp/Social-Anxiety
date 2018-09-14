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
//search control
function spm() {
    spmo.style.display = 'block';
}
function shwm() {
    shwmo.style.display = 'block';
}
function sdm() {
    sdmo.style.display = 'block';
}

//skills modal control
let sp = document.getElementById('sp');
let shw = document.getElementById('shw');
let sd = document.getElementById('sd');

let spclose = document.getElementById('spclose');
let shwclose = document.getElementById('shwclose');
let sdclose = document.getElementById('sdclose');

spclose.addEventListener('click', function () {
    spmo.style.display = "none";
});

shwclose.addEventListener('click', function () {
    shwmo.style.display = "none";
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

//add skill
let addSkill = document.getElementById("addSkill");
let searchmo = document.getElementById("searchmo");
let searchmoc = document.getElementById('searchmoc');

addSkill.addEventListener('click', function () {
    searchmo.style.display = "block";
});
searchmoc.addEventListener('click', function () {
    searchmo.style.display = "none";
})

function search() {
    // Declare variables
    var input, filter, i, searchResults;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    searchResults = document.getElementsByClassName("searchResult");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < searchResults.length; i++) {
        a = searchResults[i].getElementsByTagName("span")[0];

        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            searchResults[i].style.display = "block";
        } else {
            searchResults[i].style.display = "none";
        }
    }
}
const FIREBASE_DATABASE = firebase.database();
const FIREBASE_AUTH = firebase.auth();

var user = firebase.auth().currentUser;
console.log(user);

function sppcs() {
    FIREBASE_DATABASE.ref('/users/' + userId).set({
        currentSkill: "spp"
    });
}