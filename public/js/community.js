const FIREBASE_DATABASE=firebase.database();
const FIREBASE_AUTH = firebase.auth();

//redirect to page
document.getElementById("arrow").addEventListener("click", function(){
  window.location.href = "homepg.html";
})

// Get the modal
var createModal = document.getElementById("myModalCreate");
var searchModal = document.getElementById("myModalSearch");

// Get the button that opens the modal
var createBtn = document.getElementById("createComm");
var searchBtn = document.getElementById("joinNewComm")
// Get the <span> element that closes the modal
var createSpan = document.getElementById("createClose");
var searchSpan = document.getElementById("searchClose");
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
}
searchSpan.onclick = function() {
    searchModal.style.display="none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == createModal) {
        createModal.style.display = "none";
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
      console.log("hi");
      charCountSendDesc=false;
  }
  else {
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
      console.log("hi");
      charCountSendName=false;
  }
  else {
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
    const COMMUNITY = {
      name: nameField.value,
      desc: descField.value
    }
    FIREBASE_DATABASE.ref("communities/" + nameField.value).set(COMMUNITY);
    console.log("Created community successfully");
    }
});

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

function insertAllComm(){

  function displayAnnouncement(announcement) {
  	let div = document.createElement('div');
    //eventually - display organization's profile pic to the LEFT of the announcement title
    let domString = `<div class="saveable">
  		<span><img class="logo" src="${announcement.userProfileImg}" /></span>
  		<span class="announcement">
  				${announcement.message}
  		</span>
  	</div>`;
    div.innerHTML = domString;

  	let announceDiv = div.firstChild;

}

  FIREBASE_DATABASE.ref('/communities').once('value') //using once b/c we are taking a snapshot once daily
  	.then((snapshot) => {
  		let val = snapshot.val();
  		for (let key in val) {
  			searchResults.push(key);
  		}
    })
}

function searchAllComm(){
  // Declare variables
  var input, filter, i, searchResults;
  input = document.getElementById('searchBar');
  filter = input.value.toUpperCase();
  var searchResults =[];
  FIREBASE_DATABASE.ref('/communities').once('value') //using once b/c we are taking a snapshot once daily
  	.then((snapshot) => {
  		let val = snapshot.val();
  		for (let key in val) {
  			searchResults.push(key);
  		}
console.log(searchResults);
  // Loop through all list items, and hide those who don't match the search query
  // for (i = 0; i < searchResults.length; i++) {
  //   console.log(i);
  //     a = searchResults[i].getElementsByTagName("h5")[0];
  //     console.log(a);
  //     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
  //         searchResults[i].style.display = "block";
  //     } else {
  //         searchResults[i].style.display = "none";
  //     }
  // }
})
}
