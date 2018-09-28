// JavaScript source code
const FIREBASE_DATABASE = firebase.database();
const FIREBASE_AUTH = firebase.auth();

let enterMessage = document.getElementById("enterMessage");
let chat = window.localStorage.getItem('chat');

let name = "";
let m = [];
let x = 0;
let pm = [];
let rmess= {};

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(user);
        name = user.displayName;
        FIREBASE_DATABASE.ref("communities/" + chat).once('value').then(function (snapshot) {
            pm = snapshot.val().pm;
            console.log(chat);
        });
        enterMessage.addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                console.log(enterMessage.value);
                mess = document.getElementById("enterMessage").value;
                m.push(name + ':' + mess);
                console.log(m);
                FIREBASE_DATABASE.ref('/communities/testing/chat/' + x).set({
                    m
                });
                enterMessage.value = "";
            }
        });
    } else {
        window.location.href = "index.html";
    }
});

