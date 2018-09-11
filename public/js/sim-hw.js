let chatbox = document.getElementById('chatbox');
let option = document.getElementById('option');
let op1 = document.getElementById('op1');
let op2 = document.getElementById('op2');
let op3 = document.getElementById('op3');

var botc = document.createElement('div');

var x = 0; //stage #
var y = 0; //respond #
var z = 0; //special cases
var c = 0; //end


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
        op1.textContent = '__________ ';
        op2.textContent = "Well done!";
        op3.textContent = "---------- ";
        c = 1;
    }
}

/*var height = 0;
$('div').each(function (i, value) {
    height += parseInt($(this).height());
});

height += '';

$('div').animate({ scrollTop: height });*/