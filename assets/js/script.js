var hideStart = document.querySelector('.invisible');
var btn = document.querySelector('.btn');
var startBtn = document.querySelector('#startBtn');
var scoreBtn = document.querySelector('#btnScore');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var btn4 = document.querySelector('#btn4');
var timerEl = document.querySelector('#time');
var timeLeft
var highscoreBtn = document.querySelector('#highscoreBtn')
var highScoreTable = document.querySelector('#highScoreTable')
var goBack = document.querySelector('#goBack');



var currentIndex = 0; //start at question 1 from the quizQuestions Object 


var quizQuestions = [
    { //index 0 
        question: "Commonly used data types DO Not include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        rightAns: "strings"
    },
    { //index 1 
        question: "The condition in an if/else statement is enclosed with ________.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        rightAns: "square brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store __________.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        rightAns: "all of the above"
    },
    {
        question: "String values must be enclosed within ___________ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        rightAns: "commas"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        rightAns: "console.log"
    }

];
var playerScore = 0;
var highScoreArray = [];


if (localStorage.getItem('playersList')) {
    highScoreArray = JSON.parse(localStorage.getItem('playersList'))
}


function displayHighscore() {
    highScoreTable.innerHTML = ` 
    <tr>
    <th>
        Initials
    </th>
    <th>
        Score
    </th>
</tr>`
    document.getElementById('page').style.display = 'none';
    document.getElementById('highScoreSection').style.display = 'flex';

    for (var i = 0; i < highScoreArray.length; i++) {
        var row = `
        <tr>
        <td>${highScoreArray[i].name} </td>
        <td>${highScoreArray[i].score} </td>
        </tr>
        `;
        highScoreTable.innerHTML = highScoreTable.innerHTML + row
    };
    
};

function startQuiz() {
    document.getElementById("hidden").style.display = "none";
    startBtn.style.display = 'none'
    document.getElementById('btn1').style.display = "flex";
    document.getElementById('btn2').style.display = "flex";
    document.getElementById('btn3').style.display = "flex";
    document.getElementById('btn4').style.display = "flex";
    question();
    //call timer here function 
    countdown();
    // document.getElementById("time-remaining").textContent = timeLeft;


};

//Display Question and Choices for the Current  Question 
function question() {
    console.log("Current question is ", quizQuestions[currentIndex], " my index is ", currentIndex);

    document.getElementById('title').textContent = quizQuestions[currentIndex].question;
    document.getElementById('btn1').textContent = quizQuestions[currentIndex].choices[0];
    document.getElementById('btn2').textContent = quizQuestions[currentIndex].choices[1];
    document.getElementById('btn3').textContent = quizQuestions[currentIndex].choices[2];
    document.getElementById('btn4').textContent = quizQuestions[currentIndex].choices[3];

    //Event listener for Choice Buttons 
    btn3.addEventListener("click", CheckAnswer);
    btn1.addEventListener("click", CheckAnswer);
    btn2.addEventListener("click", CheckAnswer);
    btn4.addEventListener("click", CheckAnswer);

};


function CheckAnswer() {
    // console.log("button clicked", this.textContent);
    // console.log("right ans is ", quizQuestions[currentIndex].rightAns);
    //if the answer is right , ad player score 
    if (this.textContent === quizQuestions[currentIndex].rightAns) {
        document.getElementById('grade').textContent = 'Right';
        playerScore = playerScore + 10;
    } else {
        document.getElementById('grade').textContent = 'Wrong';
        timeLeft = timeLeft - 10; //10 seconds penality 
        // document.getElementById("time-remaining").textContent = timeLeft;

    }
    //Move to next question 
    currentIndex++;
    console.log("currentIndex", currentIndex, "Quiz Length ", quizQuestions.length);

    if (currentIndex === quizQuestions.length) {
        endQuiz();
    } else {

        //display next question and ans 
        question();
    }
}

function countdown() {
    timeLeft = 100;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = 'Time: ' + timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft;
            timeLeft--;

        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            endQuiz();
            clearInterval(timeInterval);

        }
    }, 1000);
}

function endQuiz() {
    timeLeft = 0;
    document.getElementById('block').style.display = "none";
    document.getElementById('title').textContent = 'Game Over';
    document.getElementById('grade').style.display = 'none';

    document.getElementById('gameover').style.display = "block";

}

function saveScore() {
    //grab the value from input field 
    var initials = document.getElementById('initialsForm').value
    //playerScore 
    //Create a an object name and score 
    var playerInfo = {
        name: initials,
        score: playerScore
    };
    console.log(typeof highScoreArray)
    console.log(highScoreArray)
    highScoreArray.push(playerInfo)

    //Sets value in the localstorage 
    localStorage.setItem("playersList", JSON.stringify(highScoreArray));
    displayHighscore();
}

startBtn.addEventListener("click", startQuiz);
scoreBtn.addEventListener("click", saveScore);
highscoreBtn.addEventListener('click', displayHighscore);
goBack.addEventListener('click', function () {
    document.getElementById('page').style.display = 'flex';
    document.getElementById('highScoreSection').style.display = 'none';
})
