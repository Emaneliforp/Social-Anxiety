let ham = document.getElementById('ham');
let close = document.getElementById('close');

ham.addEventListener('click', function () {
    document.getElementById("sidenav").style.width = "15vw";
});

close.addEventListener('click', function () {
    document.getElementById('sidenav').style.width = '0vw';
});

let chatbox = document.getElementById('chatbox');
let option = document.getElementById('option');
let op1 = document.getElementById('op1');
let op2 = document.getElementById('op2');
let op3 = document.getElementById('op3');

var botc = document.createElement('div');

var x = 0; //stage #
var y = 0; //respond #
var z = 0;

op1.addEventListener('click', opt1);
op2.addEventListener('click', opt2);
op3.addEventListener('click', opt3);

//pick option
function opt1() {
    var chat = document.createElement('div');
    chat.textContent = op1.textContent;
    chatbox.appendChild(chat);
    y = 1;
    bot();
}
function opt2() {
    var chat = document.createElement('div');
    chat.textContent = op2.textContent;
    chatbox.appendChild(chat);
    y = 2;
    bot();

}
function opt3() {
    var chat = document.createElement('div');
    chat.textContent = op3.textContent;
    chatbox.appendChild(chat);
    y = 3;
    bot();
}

//bot respond
/*function bot() {
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
        op1.textContent = '';
        op2.textContent = 'Mission complete';
        op3.textContent = "";
    }
    else if (x === 2 && y === 2) {
        botc.textContent = 'Yeah! The chips are really crunchy, like in a good way. Also...';
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = '';
        op2.textContent = 'You and Skit hang out for the rest of the night. Overall, the experience was pretty positive for you.';
        op3.textContent = '';
    }
    else if (x === 2 && y === 3) {
        botc.textContent = 'Oh, that sucks...Well, hope you have a better time for the rest of the party. See you at school tomorrow!';
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = '';
        op2.textContent = 'Game Over';
        op3.textContent = '';
    }
}*/
function bot() {
    x += 1;
    var botc = document.createElement('div');
    if (z === 1) {
        botc.textContent = "This is Skit speaking. How can I help you? ";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = "Do you know what the homework assignment for English is today?";
        op3.textContent = "Hello Skit, I don't understand the English assignment  today.";
        op2.textContent = "Can you help me with the English assignment today?";
        z = 0;
    }
    else if (x === 1 && y === 1) {
        botc.textContent = "Who are you looking for?";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = "May I speak to Skit?.";
        op2.textContent = 'I am (name). I am looking for Skit.';
        op3.textContent = "Is Skit here?";
        x -= 1;
        z = 1;
    }

    else if (x === 1 && y > 1) {
        botc.textContent = "This is Skit speaking. How can I help you? ";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = "Do you know what the homework assignment for English is today?";
        op3.textContent = "Do you know what the homework assignment for English is today?";
        op2.textContent = "Can you help me with the English assignment today?";
    }
    else if (x === 2 && y === 3) {
        botc.textContent = "Yes. Read Julius Caesar pgs 33-56.";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = 'Thank you. I need to go now.';
        op2.textContent = "Thank you.  Goodbye.";
        op3.textContent = "I see. Thank you. That's it for today.";
        x += 1;
    }
    else if (x === 2) {
        botc.textContent = "Sure, what's the problem?";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = 'I do not understand when to use "a" or " an."';
        op2.textContent = "What does Shakespeare mean by  ''Cowards die many times before their deaths;/The valiant never taste of death but once.'' (Julius Caesar 2.2. 32-33)";
        op3.textContent = "Do I need to write a topic sentence?";
    }
    else if (x === 3 && y === 1) {
        botc.textContent = "Typically you use a before a consonant and an before a vowel, but there are exceptions.";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = 'Thank you. I need to go now.';
        op2.textContent = "Thank you.  Goodbye.";
        op3.textContent = "I see. Thank you. That's it for today.";
    }
    else if (x === 3 && y === 2) {
        botc.textContent = "He means that  cowards die metaphorically. A part of them inside breaks away because they did not have the courage to face their challenge and live tormented by their fear of death and their inability to face their fears. The brave live their lives fully and die in reality.";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = 'Thank you. I need to go now.';
        op2.textContent = "Thank you.  Goodbye.";
        op3.textContent = "I see. Thank you. That's it for today.";
    }
    else if (x === 3 && y === 3) {
        botc.textContent = "Yes, of course. Good Question!";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = 'Thank you. I need to go now.';
        op2.textContent = "Thank you.  Goodbye.";
        op3.textContent = "I see. Thank you. That's it for today.";
    }
    else if (x === 4) {
        botc.textContent = "No problem. Goodbye.";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = '';
        op2.textContent = "Well done!";
        op3.textContent = "";
    }
}