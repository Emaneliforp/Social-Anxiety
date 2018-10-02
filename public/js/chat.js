// JavaScript source code
const FIREBASE_DATABASE = firebase.database();
const FIREBASE_AUTH = firebase.auth();

let enterMessage = document.getElementById("enterMessage");
let chat = window.localStorage.getItem('chat');

let title = document.getElementById('title');
title.textContent = chat;

let name = "";
let m = [];
let x = 0;
let pm = [];
let rmess = {};
var botc = document.createElement('div');
let nm = "";

let chatbox = document.getElementById('chatbox');

const lm = FIREBASE_DATABASE.ref("communities/" + chat + '/chat').child('m');

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(user);
        name = user.displayName;
        FIREBASE_DATABASE.ref("communities/" + chat +'/chat').once('value').then(function (snapshot) {
            /*pm = snapshot.val().m;*/
            m = snapshot.val();
            
            /*for (var i = 0; i < pm.length; i++) {
                var pc = document.createElement('div');
                pc.classList.add('bot');
                pc.textContent = pm[i];
                chatbox.appendChild(pc);
                console.log(pm);
            }*/
        });
        enterMessage.addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                console.log(enterMessage.value);
                mess = document.getElementById("enterMessage").value;
                m.push(name + ':' + mess);
                console.log(m);
                FIREBASE_DATABASE.ref('communities/' + chat + '/chat').set({
                    m
                });
                enterMessage.value = "";
            }
        });
        lm.on('child_added', snap => {
            nm = snap.val();
            var pc = document.createElement('div');
            pc.classList.add('bot');
            pc.textContent = nm;
            chatbox.appendChild(pc);
            console.log(nm);
        });

    } else {
        window.location.href = "index.html";
    }
});

