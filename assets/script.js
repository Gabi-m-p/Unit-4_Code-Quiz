var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");


var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var countdown;

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