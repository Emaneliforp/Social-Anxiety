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


// Get the modal
var createModal = document.getElementById("myModalCreate");
var searchModal = document.getElementById("myModalSearch");
var successModal = document.getElementById("myModalSuccess");

// Get the button that opens the modal
var createBtn = document.getElementById("createComm");
var searchBtn = document.getElementById("joinNewComm")
// Get the <span> element that closes the modal
var createSpan = document.getElementById("createClose");
var searchSpan = document.getElementById("searchClose");
var successSpan = document.getElementById("successClose");

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
}
searchSpan.onclick = function() {
  createModal.style.display = "none";
  searchModal.style.display="none";
  successModal.style.display="none";
}
successSpan.onclick=function(){
  createModal.style.display = "none";
  searchModal.style.display="none";
  successModal.style.display="none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == createModal) {
    createModal.style.display = "none";
    searchModal.style.display = "none";
    successModal.style.display = "none";

  }
}

window.onclick = function(event) {
  if (event.target == searchModal) {
    createModal.style.display = "none";
    searchModal.style.display = "none";
    successModal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == successModal) {
    createModal.style.display = "none";
    searchModal.style.display = "none";
    successModal.style.display = "none";
  }
}

//character count
var charCountSendName=true;
var nameField=document.getElementById("commName");
var descField=document.getElementById("commDesc")

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
    var commName = nameField.value;
    FIREBASE_AUTH.onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
        username = FIREBASE_AUTH.currentUser.displayName;
        console.log(username);
      } else {
        var username = "error";
        console.log("none");
      }
    });

    const COMMUNITY = {
      name: commName,
      creator: FIREBASE_AUTH.currentUser.displayName,
      desc: descField.value
    }
    FIREBASE_DATABASE.ref("communities/" + commName).set(COMMUNITY);

    console.log("Created community successfully");
    createModal.style.display = "none";
    var successModal = document.getElementById("myModalSuccess");
    var successModalContent = document.getElementById("modalSuccess");
    console.log(successModal);
    console.log(successModalContent);
    successModal.style.display="block";
    successModalContent.style.display="block";
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
      let title=(plusBtnArr[i].parentElement.getElementsByTagName("div")[0].innerHTML);
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const USERACC={
              username: user.displayName,
              id: user.uid
          }
          FIREBASE_DATABASE.ref("communities/" +title+"/members/"+user.displayName).set(USERACC);
          console.log("user inputted");
        } else {
          console.log("error")
        }
      });

    });
  }

}, 1000);
//
// //file upload
// //// TODO: THIS DOESN'T WORK AAAAA
// var fileBtn = document.getElementById("fileUploadBtn");
// fileUploadBtn.addEventListener("click", function(e){
//   var commName = nameField.value;
//   if(commName=="" || commName==null)
//     alert("Please enter your community name first.");
//   const file = document.querySelector('#photo').files[0];
//   var storageRef = firebase.storage().ref("/communities/" + commName +"/image");
//
//   ref.put(file).then(function(snapshot) {
//   console.log('Uploaded a blob or file!');
//   var preview=document.getElementById("preview");
//   FIREBASE_STORAGE.ref("/communities/" + commName +"/image").on('child_added', function (snapshot) {
//       console.log(snapshot.val());
//       preview = snapshot.val();
//   });
//
// // });
// const ref = firebase.storage().ref();
// const file = document.querySelector('fileUploadBtn').files[0]
// const name = (+new Date()) + '-' + file.name;
// const metadata = {
//   contentType: file.type
// };
// const task = ref.child(name).put(file, metadata);
// task
//   .then(snapshot => snapshot.ref.getDownloadURL())
//   .then((url) => {
//     console.log(url);
//     document.querySelector('#someImageTagID').src = url;
//   })
//   .catch(console.error);
// });

//functions
//search js for main page

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
