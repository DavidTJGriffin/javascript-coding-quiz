var hideStart = document.querySelector('.invisible');
var btn = document.querySelector('.btn');
var startBtn = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var btn4 = document.querySelector('#btn4');


var quizQuestions = {
    question1: {
        question: "Commonly used data types DO Not include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        rightAns: "A"
    },
    question2: {
        question: "The condition in an if/else statement is enclosed with ________.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        rightAns: "D"
    },
    question3: {
        question: "Arrays in JavaScript can be used to store __________.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        rightAns: "C"
    },
    question: {
        question: "String values must be enclosed within ___________ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        rightAns: "A"
    },
    question: {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        rightAns: "B"
    }

};

function startQuiz() {
    document.getElementById("hidden").style.display = "none";
    document.getElementById('btn2').style.display = "flex";
    document.getElementById('btn3').style.display = "flex";
    document.getElementById('btn4').style.display = "flex";
    question1();
};

function question1() {
    document.getElementById('title').textContent = quizQuestions.question1.question;
    document.getElementById('btn1').textContent = quizQuestions.question1.choices[0];
    document.getElementById('btn2').textContent = quizQuestions.question1.choices[1];
    document.getElementById('btn3').textContent = quizQuestions.question1.choices[2];
    document.getElementById('btn4').textContent = quizQuestions.question1.choices[3];
    btn3.addEventListener("click", rightAnswer);
    btn1.addEventListener("click", wrongAnswer);
    btn2.addEventListener("click", wrongAnswer);
    btn4.addEventListener("click", wrongAnswer);

    btn3.addEventListener("click", question2);
    btn1.addEventListener("click", question2);
    btn2.addEventListener("click", question2);
    btn4.addEventListener("click", question2);
};

function rightAnswer() {
    document.getElementById('grade').textContent = 'Right';
};

function wrongAnswer() {
    document.getElementById('grade').textContent = 'Wrong';
}

function question2 () {
    document.getElementById('title').textContent = quizQuestions.question2.question;
    var btn1= document.getElementById('btn1').textContent = quizQuestions.question2.choices[0];
    var btn2= document.getElementById('btn2').textContent = quizQuestions.question2.choices[1];
    var btn3= document.getElementById('btn3').textContent = quizQuestions.question2.choices[2];
    var btn4= document.getElementById('btn4').textContent = quizQuestions.question2.choices[3];
    btn1.className     
    
};


function endQuiz() {
   

}

startBtn.addEventListener("click", startQuiz);
