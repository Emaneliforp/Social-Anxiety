//for nav bar

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

//for slideshow
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
  sppmo.style.display = 'block';
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

let sppmo=document.getElementById("sppmo");
let shwmo = document.getElementById("shwmo")
let sdmo = document.getElementById("sdmo")

let close = document.getElementsByClassName("close");

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

//close out of modals
setTimeout(function(){
for (let i=0;i<close.length;i++){
  console.log(i);
  close[i].addEventListener("click", function(){
    shwmo.style.display="none";
    sppmo.style.display="none";
    sdmo.style.display="none"
  })

}
},2000)
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
    window.location.href("index.html");
  })
  .catch(function(error) {
    // An error happened
  });
  window.location.href="index.html";
});

var currentSkill =[];
var userId;
FIREBASE_AUTH.onAuthStateChanged(function(user) {
  if (user) {
    console.log(user)
    userId = FIREBASE_AUTH.currentUser.uid;
    console.log(userId)
    FIREBASE_DATABASE.ref("users/"+userId+"/currentSkill").on('child_added', function(snapshot, prevChildKey) {
      if(snapshot){
        callThis();
        displaySkillsInBox(snapshot.val());

      }
      else {
        console.log("nothing")
      }
    });
  }
});

function callThis(){
  FIREBASE_DATABASE.ref("users/"+userId+"/currentSkill").once("value")
  .then(function(snapshot) {
    currentSkill=(snapshot.val())
    console.log(currentSkill)
  });
}


function sppcs() {
  var spp ={
    name:"spp",
    type:"Party"
  }
  FIREBASE_DATABASE.ref('/users/'+userId + "/currentSkill/spp").set(spp)

}
function shwcs() {
  var shw ={
    name:"shw",
    type:"Homework"
  }
  FIREBASE_DATABASE.ref('/users/'+userId + "/currentSkill/shw").set(shw)
}

function sdcs(){
  var sd = {
    name:"sd",
    type:"Debate"
  }
  FIREBASE_DATABASE.ref('/users/'+userId + "/currentSkill/sd").set(sd)

}

function displaySkillsInBox(snapshot){
  FIREBASE_AUTH.onAuthStateChanged(function(user) {
    if (user) {

      let div = document.createElement('div');
      console.log(snapshot)
      console.log(snapshot.type)
      let domString = `<div class="skilliconaa">${snapshot.type}</div>`
      div.innerHTML = domString;
      let skillDiv = div.firstChild;
      console.log(skillDiv)
      var searchBoxDiv =document.getElementById("recentskill");
      console.log(searchBoxDiv)
      searchBoxDiv.appendChild(skillDiv);
    }
  });
}
setTimeout(function(){
var skillList = document.getElementsByClassName("skilliconaa");
console.log(skillList.length)
for (let i = 0; i < skillList.length; i++) {
  skillList[i].addEventListener("click", function(){
    var skillName = skillList[i].innerHTML
    if (skillName==="Party"){
      sppmo.style.display="block";
    }
    else if (skillName==="Homework"){
      shwmo.style.display="block";

    }
    else if (skillName==="Debate"){
      sdmo.style.display="block"
    }
  })
}
},2000)

let rsp = document.getElementById("rsp");
let rshw = document.getElementById("rshw");
let rsd = document.getElementById("rsd");
// setTimeout(function(){
// for (var i = 0; i <= currentSkill[0].length; i++) {
//   if (currentSkill[0][i] === "spp") {
//     rsp.style.display = "block";
//   }
//   if (currentSkill[0][i] === "rshw") {
//     rshw.style.display = "block";
//   }
// }
// },2000)
//put skills u practiced onto homepg



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
  var msg = document.getElementById("test");

  //create communities tab using data from database
  if (community){
    test.style.display="none"
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
  else{
    test.style.display="block"
  }
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
    closeArr[i].addEventListener("click", function(){
      cModalArr[i].style.display = "none";
    });
  }

}, 3500);
