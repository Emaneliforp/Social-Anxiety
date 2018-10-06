const FIREBASE_DATABASE=firebase.database();
const FIREBASE_AUTH = firebase.auth();

//redirect to page
document.getElementById("arrow").addEventListener("click", function(){
  window.location.href = "homepg.html";
})

//get all communities in database
FIREBASE_DATABASE.ref('/communities').on('child_added', function(snapshot, prevChildKey) {
  displayCommInSearch(snapshot.val());

});
FIREBASE_AUTH.onAuthStateChanged(function(user) {
  if (user) {
    console.log(user)
    FIREBASE_DATABASE.ref("users/"+user.uid+"/communities").on('child_added', function(snapshot, prevChildKey) {
      displayCommInSearchMain(snapshot.val());
    });
  } else {
    console.log("kms")
  }
});

var use = [];

// Get the modal
var createModal = document.getElementById("myModalCreate");
var searchModal = document.getElementById("myModalSearch");
var successModal = document.getElementById("myModalSuccess");
var joinModal = document.getElementById("myModalJoin");
// Get the button that opens the modal
var createBtn = document.getElementById("createComm");
var searchBtn = document.getElementById("joinNewComm")
// Get the <span> element that closes the modal
var createSpan = document.getElementById("createClose");
var searchSpan = document.getElementById("searchClose");
var successSpan = document.getElementById("successClose");
var joinSpan = document.getElementById("joinClose");

// When the user clicks on the button, open the modal
createBtn.onclick = function() {
  createModal.style.display = "block";
}
searchBtn.onclick=function(){
  searchModal.style.display="block";
}

// When the user clicks on <span> (x), close the modal
createSpan.onclick = function() {
  createModal.style.display = "none";
  searchModal.style.display="none";
  successModal.style.display="none";
  joinModal.style.display="none"
}
searchSpan.onclick = function() {
  createModal.style.display = "none";
  searchModal.style.display="none";
  successModal.style.display="none";
  joinModal.style.display="none"
}
successSpan.onclick=function(){
  createModal.style.display = "none";
  searchModal.style.display="none";
  successModal.style.display="none";
  joinModal.style.display="none"
}
joinSpan.onclick=function(){
  createModal.style.display = "none";
  searchModal.style.display="none";
  successModal.style.display="none";
  joinModal.style.display="none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == createModal) {
    createModal.style.display = "none";
    searchModal.style.display = "none";
    successModal.style.display = "none";
    joinModal.style.display="none"
  }
}

window.onclick = function(event) {
  if (event.target == searchModal) {
    createModal.style.display = "none";
    searchModal.style.display = "none";
    successModal.style.display = "none";
    joinModal.style.display="none"
  }
}
window.onclick = function(event) {
  if (event.target == successModal) {
    createModal.style.display = "none";
    searchModal.style.display = "none";
    successModal.style.display = "none";
    joinModal.style.display="none"
  }
}
window.onclick = function(event) {
  if (event.target == joinModal) {
    createModal.style.display = "none";
    searchModal.style.display = "none";
    successModal.style.display = "none";
    joinModal.style.display="none"
  }
}
//character count
var charCountSendName=true;
var nameField=document.getElementById("commName");
var descField = document.getElementById("commDesc");

document.getElementById('commName').onkeyup = function () {
  var item  = document.getElementById('nameCount');
  if (item.length<=0){
    item.value = item.value.substring(0, 18);
  }
  item.innerHTML = "Characters left: " + (18 - this.value.length);
};
var charCountSendDesc=true;
//character count
descField.onkeyup = function () {
  var charRemain=0;
  var item  = document.getElementById('descCount');
  charRemain = 300-this.value.length;
  //change text to red if over chara limit
  if (charRemain<0){
    item.style.color = "red";
    charCountSendDesc=false;
  }
  else {
    item.style.color="gray";
    charCountSendDesc=true;
  }
  item.innerHTML = "Characters left: " + (charRemain);
};


nameField.onkeyup = function () {
  var charRemain=0;
  var item  = document.getElementById('nameCount');
  charRemain = 18-this.value.length;
  //change text to red if over chara limit
  if (charRemain<0){
    item.style.color = "red";

    charCountSendName=false;
  }
  else {
    item.style.color="gray";
    charCountSendName=true;
  }
  item.innerHTML = "Characters left: " + (charRemain);
};
var m = ["Hi! This is Skit, welcome to the community"];
document.getElementById("createCommBtn").addEventListener("click",function(){
  //check for character limit
  if (!charCountSendName || !charCountSendDesc)
  alert("You are over the character limit");
  //if desc/name is too short, prevent from sending (to prevent spam communities)
  console.log(nameField.value);
  if (nameField.value.length<=4 || descField.value.length<=10){
    alert("Brevity is the soul of wit, but please include more information");
  }

  else{
    //retrieve username of current user
    var username;
    var id;
    var commName = nameField.value;
    var m = ["Skit: Hi", "Welcome"];
    

    FIREBASE_AUTH.onAuthStateChanged(function(user) {
      if (user) {
          console.log(user);
        username = FIREBASE_AUTH.currentUser.displayName;
          id = user.uid;
          use.push(username);
        const COMMUNITY = {
          name: commName,
          creator: FIREBASE_AUTH.currentUser.displayName,
          desc: descField.value,
          mem: use
        }
          FIREBASE_DATABASE.ref("communities/" + commName).set(COMMUNITY);
          FIREBASE_DATABASE.ref("communities/" + commName + "/chat/m").set(m);
        const USERACC={
          username: username,
          permission: "owner"
        }
        const aaa={
          name: commName,
          creator: username,
          desc: descField.value,
          permission: "owner"
        }
        FIREBASE_DATABASE.ref("communities/" +commName+"/members/"+id).set(USERACC);
        FIREBASE_DATABASE.ref("users/" +user.uid +"/communities/"+commName).set(aaa);

        console.log("Created community successfully");
        createModal.style.display = "none";                                
        var successModal = document.getElementById("myModalSuccess");
        var successModalContent = document.getElementById("modalSuccess");
        console.log(successModal);
        console.log(successModalContent);
        successModal.style.display="block";
        successModalContent.style.display="block";
      } else {
        console.log("error")
      }
    });
  }
});




//timeout to prevent length=0
setTimeout(function(){
  //make array with all plusbtns
  let plusBtnArr = document.getElementsByClassName("plusbtn");
  //loop through all and attach event listeners
  console.log(plusBtnArr);

  //loop through all and attach event listeners
  for (let i = 0; i < plusBtnArr.length; i++) {

    plusBtnArr[i].addEventListener("click", function(){
      //get title of community clicked
      console.log(i)
      let title=(plusBtnArr[i].parentElement.getElementsByTagName("div")[0].innerHTML);
      let author =(plusBtnArr[i].parentElement.getElementsByTagName("div")[1].innerHTML);
      author = author.slice(12);
      let description = (plusBtnArr[i].parentElement.getElementsByTagName("div")[2].innerHTML);
      description= description.slice(3);
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
              username = FIREBASE_AUTH.currentUser.displayName;
              console.log(user);
              console.log("hi");
              FIREBASE_DATABASE.ref("communities/" + title + '/mem/').once('value').then(function (snapshot) {
                  console.log(FIREBASE_AUTH.currentUser.displayName);
                  console.log(username);
                  m = snapshot.val();
                  m.push(username);
                  console.log(m);
                  FIREBASE_DATABASE.ref("communities/" + title + "/mem/").set(m);
              });
          const USERACC={
            username: user.displayName,
            permission: "regular"
          }
          const aaa={
            name: title,
            creator: author,
            desc: description,
            permission: "regular"
          }
          console.log(user);
          FIREBASE_DATABASE.ref("communities/" +title+"/members/"+user.uid).set(USERACC);
          FIREBASE_DATABASE.ref("users/" +user.uid +"/communities/"+title).set(aaa);
          console.log("user inputted");
          joinModal.style.display="block"
          searchModal.style.display="none"
        } else {
          console.log("error");
          window.location.href = "index.html";
        }
      });

    });
  }

}, 1000);

function search() {
  // Declare variables
  var input, filter, i, searchResults;
  input = document.getElementById('searchBar');
  filter = input.value.toUpperCase();
  searchResults=document.getElementsByClassName("searchResult");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < searchResults.length; i++) {
    a = searchResults[i].getElementsByTagName("h5")[0];

    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      searchResults[i].style.display = "block";
    } else {
      searchResults[i].style.display = "none";
    }
  }
}

function displayCommInSearch(community){
  var searchResults=[];
  FIREBASE_DATABASE.ref('/communities').once('value') //using once b/c we are taking a snapshot once daily
  .then((snapshot) => {
    let val = snapshot.val();
    for (let key in val) {
      searchResults.push(key);
    }
  })

  let div = document.createElement('div');
  let domString = `<div class="modalSearchResult">
  <div id ="modalSearchh5">${community.name}</div>
  <img class = "plusbtn" src= "../images/plus.png">
  <div id = "modalSearchh4">${"created by: "+community.creator}</div>
  <div id ="modalSearchParagraph">
  ${community.desc}
  </div>
  </div>`;
  div.innerHTML = domString;

  let communityDiv = div.firstChild;
  var modalSearchDiv =document.getElementById("modalSearchArea");
  modalSearchDiv.appendChild(communityDiv);

}


function displayCommInSearchMain(community){
  FIREBASE_AUTH.onAuthStateChanged(function(user) {
    if (user) {
      let div = document.createElement('div');
      let domString = `<div class="searchResult" onclick="chat()">
      <div class ="searchResulth5" >${community.name}</div>
      <div id = "modalSearchh4">${"created by: "+community.creator}</div>
      <div id ="modalSearchParagraph">
      ${community.desc}
      </div>
      </div>`;
      div.innerHTML = domString;

      let communityDiv = div.firstChild;
      var modalSearchDiv =document.getElementById("searchResultArea");
      modalSearchDiv.appendChild(communityDiv);
      console.log(community)
    } else {
      console.log("perish");
    }
  });
}

function searchAllComm(){
  // Declare variables
  var input, filter, i, searchResults;
  input = document.getElementById("searchNewCommBar");
  filter = input.value.toUpperCase();
  var searchResults =[];

  searchResults = document.getElementsByClassName("modalSearchResult");
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < searchResults.length; i++) {
    a = searchResults[i].innerHTML;
    if (a.toUpperCase().indexOf(filter) > -1) {
      searchResults[i].style.display = "inline-block";
    } else {
      searchResults[i].style.display = "none";
    }
  }
}

var title = document.getElementsByClassName("searchResulth5");
var chatn = "";
function chat() {
  for (let i = 0; i < title.length; i++) {
    title[i].addEventListener("click", function () {
      chatn = title[i].innerHTML;
      window.localStorage.setItem('chat', chatn);
      window.location.href = "messages.html";
    });

  }
}
