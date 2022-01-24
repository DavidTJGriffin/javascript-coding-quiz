var hideStart = document.querySelector('.invisible');
var Btn = document.querySelector('.btn');
var startBtn = document.querySelector('#btn1');

var quizQuestions = {
    question1: {
        question: "Commonly used data types DO Not include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        rightAns: "A"
    },
    question2: {
        question2: "The condition in an if/else statement is enclosed with ________.",
        choices2: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        rightAns2: "D"
    },
    question3: {
        question3: "Arrays in JavaScript can be used to store __________.",
        choices3: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        rightAns3: "C"
    },
    question4: {
        question4: "String values must be enclosed within ___________ when being assigned to variables.",
        choices4: ["commas", "curly brackets", "quotes", "parenthesis"],
        rightAns4: "A"
    },
    question5: {
        question5: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices5: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        rightAns5: "B"
    }

};

function startQuiz() {
    console.log('this worked!')
    document.getElementById("hidden").style.display = "none";
    document.getElementById('btn2').style.display = "flex";
    document.getElementById('btn3').style.display = "flex";
    document.getElementById('btn4').style.display = "flex";
    firstQuestion();
};

function firstQuestion() {
    document.getElementById('title').textContent = quizQuestions.question;
};

// function displayQuestionAns() {
//     console.log("Current Question", quizQuestions[index].question);
//     console.log("Options", quizQuestions[index].choices);
//     console.log("Answer is ", quizQuestions[index].rightAns);
// }


// function checkRightWrong() {

//     //Move to next question 
//     index = index + 1;

//     //Display the QA in the section based on the new index 
//     displayQuestionAns();

// }


function endQuiz() {
    //run out of time or questions 
    //display score and submit score 

}

startBtn.addEventListener("click", startQuiz);