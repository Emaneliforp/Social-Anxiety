//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
nlp = window.nlp_compromise;

var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Chatbot', //name of the chatbot
  talking = true; //when false the speach function doesn't work
//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//edit this function to change what the chatbot says
function chatbotResponse() {
  talking = true;
  botMessage = "I'm confused"; //the default message

  var a = lastUserMessage.search(/a/i);
  if (a!==-1) {
    const hi = ['Hi!' +"I have been doing well."+"Thank you for talking.",'Howdy!'+"Nice to meet you.",'Hello,'+"I am busy"]
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }
  var b = lastUserMessage.search(/b/i);
  if (b!==-1) {
     const hi = ['Hi!' +"I am very tired."+"Hopefully, I will feel better",'You have so much energy!','Hello,'+"I am very happy"]
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }
  var c =lastUserMessage.search(/c/i);
  if(c!==-1){
    botMessage='I am going to the beach';
  }
  var d=lastUserMessage.search(/d/i);
if(d!==-1){
  botMessage='Nice to know';
}
var e=lastUserMessage.search(/e/i);
if(e!==-1){
  botMessage='My interest is in talking to people.Everyone has such unique personallities'+'Wow, we have been talking for a long time'+'I need to go in an hour.';
}
var f=lastUserMessage.search(/f/i);
if(f!==-1){
  botMessage="It has been terrible recently";
}
var g=lastUserMessage.search(/g/i);
if(g!==-1){
  botMessage="Goodbye, See you later.";
}
  var h=lastUserMessage.search(/h/i);
if(h!==-1){
  botMessage="Goodbye, See you tomorrow.";
}
   var i=lastUserMessage.search(/i/i);
if(i!==-1){
  botMessage="Goodbye, Nice talking to you.";
}
   var j=lastUserMessage.search(/j/i);
  if(j!==-1){
  botMessage="Goodbye, Keep smiling.";
}
}
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//
//
//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
   var cat;
  //if the message from the user isn't empty then run
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    if (lastUserMessage=='a'){
    cat="Hi, how are you doing?" ;
    }
    if (lastUserMessage=='b'){
      cat="How are you doing?";
    }
    if (lastUserMessage=='c'){
      cat="What's on the Agenda?";
    }
    if (lastUserMessage=='d'){
  cat="I am well. Thank you";
}
if (lastUserMessage=='e'){
  cat="I see, What are your interests?";
}
if (lastUserMessage=='f'){
  cat="How do you like the weather";
}
if (lastUserMessage=='g'){
  cat="I'm going to be late"+"Goodbye";
}
if (lastUserMessage=='h'){
  cat="Goodbye";
}
if (lastUserMessage=='i'){
  cat="Me too."+"Goodbye";
}
if (lastUserMessage=='j'){
  cat="See you later! Goodbye";
}
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push(cat);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b>" + botName + ":</b> " + botMessage);
    // says the message using the text to speech function written below
    Speech(botMessage);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    //utterance.rate = 0.1; // 0.1 to 10
    //utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}


(function() {
  const myQuestions = [
    {
      question: "Start by saying something.",
      answers: {
        a: "Hi",
        b: "How are you doing?",
        c: "What's on the agenda?"
      },
    },
    {
      question: "Good Job.",
      answers: {
        d: "I am well. Thankyou.",
        e: "I see. What are your interests?",
        f: "How do you like the weather?"
      },
    },
    {
      question: "Amazing!",
      answers: {
        g: "Goodbye.",
        h: "Sorry, I need to go.",
        i: "See you next time.",
        j: "Thank you."
      },
      correctAnswer: "d"
    }
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "none";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "none";
    } else {
      nextButton.style.display = "none";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    if (currentSlide==slides.length-1){
    showSlide(0);
  }
  else{
    showSlide(currentSlide+1);
  }
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
  document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
    showNextSlide();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}
})();
