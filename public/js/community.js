const FIREBASE_DATABASE=firebase.database();
const FIREBASE_AUTH = firebase.auth();

//redirect to page
document.getElementById("arrow").addEventListener("click", function(){
  window.location.href = "homepg.html";
})

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("createComm");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//character count
document.getElementById('commName').onkeyup = function () {
  var item  = document.getElementById('nameCount');
  if (item.length<=0){
     item.value = item.value.substring(0, 18);
  }
  item.innerHTML = "Characters left: " + (18 - this.value.length);
};
var charCountSendDesc=true;
var descField=document.getElementById("commDesc");
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

var charCountSendName=true;
var nameField=document.getElementById("commName");

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
  if (nameField.value.length<=4 || descField.value.length<=10){
    alert("Brevity is the soul of wit, but please include more information");
  }
  else{
    const COMMUNITY = {
      name: nameField.value
    }
    FIREBASE_DATABASE.ref("communities/" + nameField.value).push(COMMUNITY);
    console.log("Created community successfully");
    }
});
