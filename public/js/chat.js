// JavaScript source code
const FIREBASE_DATABASE = firebase.database();
const FIREBASE_AUTH = firebase.auth();

let enterMessage = document.getElementById("enterMessage");
let chat = window.localStorage.getItem('chat');
let gamebar = document.getElementById('gamebar');

let title = document.getElementById('title');
title.textContent = chat;

let name = "";
let m = [];
let x = 0;
let pm = [];
let rmess = {};
let nm = "";
let un = "";

let chatbox = document.getElementById('chatbox');

const lm = FIREBASE_DATABASE.ref("communities/" + chat + '/chat').child('m');
const uname = FIREBASE_DATABASE.ref("communities/" + chat + '/mem');

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        FIREBASE_DATABASE.ref("communities/" + chat + '/mem').once('value').then(function (snapshot) {
            for (var z = 0; z < snapshot.val().length; z++) {
                un = snapshot.val()[z];
                console.log(un);
                var chatname = document.createElement('div');
                chatname.classList.add('chatmem');
                chatname.textContent = un;
                gamebar.appendChild(chatname);
            }
        });
    }
});
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(user);
        name = user.displayName;
        FIREBASE_DATABASE.ref("communities/" + chat +'/chat').once('value').then(function (snapshot) {
            /*pm = snapshot.val().m;*/
            m = snapshot.val().m;
            
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
        

    } else {
        window.location.href = "index.html";
    }
});
var messn = "";
var mess = "";
var i = "";

lm.on('child_added', snap => {
    nm = snap.val();
    i = nm.indexOf(":");
    messn = nm.substring(0, i);
    mess = nm.substring(i + 1);
    var pn = document.createElement('div');
    var pc = document.createElement('div');
    if (messn === name) {
        pn.classList.add('usern');
    } else {
        pn.classList.add('name');
    }
    pn.textContent = messn;
    chatbox.appendChild(pn);
    if (messn === name) {
        pc.classList.add('user');
    }
    else {
        pc.classList.add('bot');
    }
    pc.textContent = mess;
    chatbox.appendChild(pc);
});