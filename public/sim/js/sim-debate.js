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
    if (x === 1 && y === 3) {
        botc.textContent = "I disagree. Talent only takes you so far.";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = "Talent can give you a stronger advantage.";
        op3.textContent = "Few people have talent. So talent will give you a strong advantage.";
        op2.textContent = "Talent can give you a jump of many years.";
        z = 2;
    }
    else if (x === 1) {
        botc.textContent = "I don't agree. Some people clearly have talent.";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = "Without hard work, no one is going to get better even with talent.";
        op2.textContent = 'Talent may give you an advantage, but in the end, it is hard work.';
        op3.textContent = "Yes, talent exists, but it is not useful without effort.";
        z = 1;
    }

    else if (x === 2 && z === 1) {
        botc.textContent = "A natural advantage may save someone many years of work. It may be the step that distinguishes two people that work equally hard. ";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = "True, but talent gives you the head start. Hard work finishes the race.";
        op3.textContent = "In the long run, hard work will show more lasting effects.";
        op2.textContent = "Most people are not very talented, but through hard work they can do just fine.";
    }
    else if (x === 3 && z === 1) {
        botc.textContent = "Not everyone has talent! That's what makes talent so influential. If you are talented, you win.";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = 'Not really. Having talent may cause you to give up easily when things become difficult or beyond your natural talent.';
        op2.textContent = "I disagree. Talent is overrated.";
        op3.textContent = "Talent may cause you to become lazy and give up when you actually have to do the work.";
    }
    else if (x === 2 && z === 2) {
        botc.textContent = "In the long run,  hard work over runs talent.";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = 'In a close race, talent may distinguish the winner as well.';
        op2.textContent = "Hard work is discouraging.";
        op3.textContent = "Talent can save you the frustration.";
    }
    else if (x === 3 && z === 2) {
        botc.textContent = "Talent can cause you to become lazy and give up when you actually have to do the work.";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = 'Talent can give you confidence.';
        op2.textContent = "Talent can allow you to know what you are meant to do and move toward your goal.";
        op3.textContent = "Talent can give you other people's recognition and with that you can be encouraged to keep moving forward.";
    }
    else if (x === 4) {
        botc.textContent = "I see your point.";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = 'You have a good point as well.';
        op2.textContent = "Hard work and talent both play a part.";
        op3.textContent = "I understand your view. Good argument.";
    }
    else if (x === 5) {
        botc.textContent = "We had a good debate. Thanks.";
        botc.classList.add('bot');
        chatbox.appendChild(botc);
        op1.textContent = '__________ ';
        op2.textContent = "Well done!";
        op3.textContent = "---------- ";
        c = 1;
    }
}