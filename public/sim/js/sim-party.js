let chatbox = document.getElementById('chatbox');
let option = document.getElementById('option');
let op1 = document.getElementById('op1');
let op2 = document.getElementById('op2');
let op3 = document.getElementById('op3');

var botc = document.createElement('div');

var x = 0; //stage #
var y = 0; //respond #
var z = 0;
var c = 0;


op1.addEventListener('click', opt1);
op2.addEventListener('click', opt2);
op3.addEventListener('click', opt3);


//pick option
function opt1() {
    if (c < 1) {
        var chat = document.createElement('div');
        chat.classList.add('user');
        chat.textContent = op1.textContent;
        chatbox.appendChild(chat);
        y = 1;
        bot();
    }
}
function opt2() {
    if (c < 1) {
        var chat = document.createElement('div');
        chat.classList.add('user');
        chat.textContent = op2.textContent;
        chatbox.appendChild(chat);
        y = 2;
        bot();
    }
}
function opt3() {
    if (c < 1) {
        var chat = document.createElement('div');
        chat.classList.add('user');
        chat.textContent = op3.textContent;
        chatbox.appendChild(chat);
        y = 3;
        bot();
    }
}
//bot respond
function bot() {
    x += 1;
    var botc = document.createElement('div');
    if (x === 1 & y === 3) {
        botc.textContent = "I'm in three of your classes...I'm Skit. I'm having a lot of fun, even though I didn't think I would've. I'm not much of a party guy but this isn't so bad. How about you?";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = "I'm having fun too!";
        op2.textContent = 'The food and drinks here are really good, have you tried some?';
        op3.textContent = "I'm kind of having a bad time.";
    }
    else if (x === 1 & y === 1) {
        botc.textContent = "Hope you're having a good time! I'm having a lot of fun, even though I didn't think I would've. I'm not much of a party guy but this isn't so bad. How about you?";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = "I'm having fun too!";
        op2.textContent = 'The food and drinks here are really good, have you tried some?';
        op3.textContent = "I'm kind of having a bad time.";
    }
    else if (x === 1 & y === 2) {
        botc.textContent = "I'm having a lot of fun, even though I didn't think I would've. I'm not much of a party guy but this isn't so bad. How about you?";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = "I'm having fun too!";
        op2.textContent = 'The food and drinks here are really good, have you tried some?';
        op3.textContent = "I'm kind of having a bad time.";
    }
    else if (x === 2 && y === 1) {
        botc.textContent = 'Cool! Well, enjoy the rest of the party. See you at school tomorrow!';
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = '__________ ';
        op2.textContent = "Well done!";
        op3.textContent = "---------- ";
        c = 1;
    }
    else if (x === 2 && y === 2) {
        botc.textContent = 'Yeah! The chips are really crunchy, like in a good way. Also...';
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = '__________';
        op2.textContent = 'You and Skit hang out for the rest of the night. Overall, the experience was pretty positive for you.';
        op3.textContent = '----------';
        c = 1;
    }
    else if (x === 2 && y === 3) {
        botc.textContent = 'Oh, that sucks...Well, hope you have a better time for the rest of the party. See you at school tomorrow!';
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = '';
        op2.textContent = 'Game Over';
        op3.textContent = '';
        c = 1;
    }
}