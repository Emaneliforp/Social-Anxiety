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

//add skill
let addSkill = document.getElementById("addSkill");
let searchmo = document.getElementById("searchmo");
let searchmoc = document.getElementById('searchmoc');

addSkill.addEventListener('click', function () {
  searchmo.style.display = "block";
});
searchmoc.addEventListener('click', function () {
  searchmo.style.display = "none";
});

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
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);

    userId = FIREBASE_AUTH.currentUser.uid;
    FIREBASE_DATABASE.ref('/users/' + userId+"/currentSkill").on('child_added', function(snapshot, prevChildKey) {
      var snapshot =  snapshot.val().currentSkill;
      if (snapshot){
        currentSkill = snapshot;
        console.log("logged")
      }
    });
  } else {
    window.location.href = "index.html";
  }
  console.log(currentSkill);

});

function sppcs() {
  currentSkill.push("spp");
  FIREBASE_DATABASE.ref('/users/' + userId+"/currentSkill").set(currentSkill);
}
function shwcs() {
  currentSkill.push("shw");
  FIREBASE_DATABASE.ref('/users/' + userId+"/currentSkill").set(currentSkill);
}

let rsp = document.getElementById("rsp");
let rshw = document.getElementById("rshw");
let rsd = document.getElementById("rsd");
//
// for (var i = 0; i <= currentSkill[0].length; i++) {
//   if (currentSkill[0][i] === "spp") {
//     rsp.style.display = "block";
//   }
//   if (currentSkill[0][i] === "rshw") {
//     rshw.style.display = "block";
//   }
// }

//put skills u practiced onto homepg

FIREBASE_AUTH.onAuthStateChanged(function(user) {
  if (user) {
    currentSkillArr=[];

  } else {

  }
});

//get database info
FIREBASE_AUTH.onAuthStateChanged(function(user) {
  if (user) {
    FIREBASE_DATABASE.ref("users/"+user.uid+"/communities").on('child_added', function(snapshot, prevChildKey) {
      showComm(snapshot.val());
    });
  } else {
    console.log("no user entered");
  }
});

function showComm(community){
  //create communities tab using data from database
  let div = document.createElement('div');
  let domString = `<div class ="comicon">${community.name}</div>`;
  div.innerHTML = domString;

  let communityDiv = div.firstChild;
  var communityDivArea =document.getElementsByClassName("communities")[0];
  communityDivArea.appendChild(communityDiv);
  let div2=document.createElement("div");
  let domString2= `<div class ="cmodal">
  <div class ="practice">
  <div class = "nav"><i class="closeC"></i></div>
  <div class ="info">
  <div class="title">
  ${community.name}
  </div>
  <div class ="descrp">
  ${community.desc}
  </div>
  <div class="opc">
  <a href="#">Enter</a>
  </div>
  </div>
  </div>
  </div>"`
  div2.innerHTML = domString2;
  let communityDivModal = div2.firstChild;
  let communityDivModalArea = document.getElementsByTagName("body")[0];
  communityDivModalArea.appendChild(communityDivModal);
}

//for communities tab
setTimeout(function(){
  let communitiesArr = [];
  let cModalArr = [];
  let closeArr=[];
  cModalArr = document.getElementsByClassName("cmodal");
  communitiesArr= document.getElementsByClassName("comicon");
  closeArr=document.getElementsByClassName("closeC");

  //goes through html elements and attaches event listeners
  for (let i = 0; i < communitiesArr.length; i++) {
    cModalArr[i].addEventListener("click", function(){
      cModalArr[i].style.display="none";
    });
    communitiesArr[i].addEventListener("click", function(){
      cModalArr[i].style.display = "block";
    });
    console.log(closeArr[i]);
    closeArr[i].addEventListener("click", function(){
      cModalArr[i].style.display = "none";
    });
  }

}, 3500);
