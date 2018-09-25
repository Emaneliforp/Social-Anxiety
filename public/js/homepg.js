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

function currentDiv(n){
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var c = document.getElementsByClassName("caption");
  var dots = document.getElementsByClassName("badge");
  if (n > x.length) {slideIndex = 1};
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
     c[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" badgewhite", "");
  }
  x[slideIndex-1].style.display = "block";
  c[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " badgewhite";
}
//auto slideshow
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var c = document.getElementsByClassName("caption");
    var dots = document.getElementsByClassName("badge");

    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
       c[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" badgewhite", "");
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
      c[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " badgewhite";
    setTimeout(carousel, 6000); // Change image every 2 seconds
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

var communityNavBtn = document.getElementById("communityNav");
communityNavBtn.addEventListener("click", function(){
  window.location.href="community.html";
});

var logoutBtn = document.getElementById("logoutNav");
logoutBtn.addEventListener("click", function(){
  firebase.auth().signOut()
  .then(function() {
  console.log("user signed out")
  })
  .catch(function(error) {
    // An error happened
  });

  console.log(user);
  // window.location.href="index.html";
});
var currentSkill = [];
let userId = "";
let grade = "";
let name = "";
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      console.log(user);

      userId = FIREBASE_AUTH.currentUser.uid;
      FIREBASE_DATABASE.ref('/users/' + userId).once('value').then(function (snapshot) {
          currentSkill = snapshot.val().currentSkill;
          grade = snapshot.val().grade;
          name = snapshot.val().grade;
          console.log(currentSkill);
      });



    } else {
        window.location.href = "index.html";
    }
});


function sppcs() {
    currentSkill.push("spp");
    console.log(currentSkill);
    FIREBASE_DATABASE.ref('/users/' + userId).set({
        currentSkill: currentSkill,
        grade: grade,
        name: name
    });
}
function shwcs() {
    currentSkill.push("shw");
    console.log(currentSkill);
    FIREBASE_DATABASE.ref('/users/' + userId).set({
        currentSkill: currentSkill
    });
}

let rsp = document.getElementById("rsp");
let rshw = document.getElementById("rshw");
let rsd = document.getElementById("rsd");

/*for (var i = 0; i <= currentSkill[0].length; i++) {
    if (currentSkill[0][i] === "spp") {
        rsp.style.display = "block";
    }
    if (currentSkill[0][i] === "rshw") {
        rshw.style.display = "block";
    }
<<<<<<< HEAD
}
=======
}*/

FIREBASE_DATABASE.ref("users/"+user.uid+"/communities").on('child_added', function(snapshot, prevChildKey) {
  showComm(snapshot.val());

});
function showComm(community){

  let div = document.createElement('div');
  let domString = `<div class ="comicon">${community.name}</div>`;
  div.innerHTML = domString;

  let communityDiv = div.firstChild;
  var communityDivArea =document.getElementById("communities");
  communityDivArea.appendChild(communityDiv);
}
