var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");


var correctAns = 0;
var incorrectAns = 0;
var isCorrect = false;
var timer;
var timerCount;
var countdown;

var quizQuestions = [
    {
        question1: "Which event occurs when the user clicks on an HTML element?",
        answers: {
            a: "onClick",
            b: "onmouseclick",
            c: "onmouseover",
            d: "onchange",

        },
        correctAnswer = "a"
    },
    {
        question2: "How do you declare a Javascript variable?",
        answers: {
            a: "var thisAnswer",
            b: "v thisAnswer",
            c: "variable thisAnswer",
            d: "variable=thisAnswer",

        },
        correctAnswer = "a"
    },
    {
        question3: "What will the following code return: Boolean(10 > 9)",
        answers: {
            a: "true",
            b: "false",
            c: "NaN",
            d: "tralse",
        },
        correctAnswer: "a"
    }
]


startButton.addEventListener("click", beginQuiz)

function beginQuiz() {
    
}



//Answering Questions
    //Click start button and timer appears with first question
        //First Question 
        // a list of answers appears and user chooses answer.
        //After first question completed the second question appears.

//Correct and Incorrect answers
    //if a question is answered correctly or incorrectly this information is stored in local storage.
    // Reset button clears localStorage and updates screen
        // Event listener for button
    // Fetch wins/losses from localStorage abnd display

//Timer
    //Start button starts countdown from 60 seconds
        //Event listener for button

    //for every incorrect answer the timer decreases by 10 seconds.
    //Every second of timer
        //Decrement countdown
        //Display new value on screen
                
//Quiz is over if countdown has finished or all questions answered.
            //display correct/incorrect answers.
            //stop timer.
            //Declare win or lose.