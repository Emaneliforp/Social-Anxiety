// JavaScript source code
const FIREBASE_DATABASE = firebase.database();
const FIREBASE_AUTH = firebase.auth();

let enterMessage = document.getElementById("enterMessage");

let name = "";
let token = [];
let x = 0;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(user);

        name = user.displayName;

    } else {
        window.location.href = "index.html";
    }
});


enterMessage.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        console.log(enterMessage.value);
        mess = document.getElementById("enterMessage").value;
        token = [name, mess];
        FIREBASE_DATABASE.ref('/communities/testing/chat/' + x).set({
            token: token
        });
    }
});