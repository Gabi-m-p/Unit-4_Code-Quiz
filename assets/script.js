
var startButton = document.getElementById("start-button");
var questionsContainer = document.getElementById("question");
var resultsContainer = document.getElementById("results");
var answerContainer = document.getElementById("answer");
var buttonContainer = document.getElementById ("button");

var timer;
var timerCount;
var questionIndex = 0;

var quizQuestions = [
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: {
            a: "onClick",
            b: "onmouseclick",
            c: "onmouseover",
            d: "onchange",

        },
        correctAnswer: "a"
    },
    {
        question: "How do you declare a Javascript variable?",
        answers: {
            a: "var thisAnswer",
            b: "v thisAnswer",
            c: "variable thisAnswer",
            d: "variable=thisAnswer",

        },
        correctAnswer: "a"
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        answers: {
            a: "true",
            b: "false",
            c: "NaN",
            d: "tralse",
        },
        correctAnswer: "a"
    }
]



function beginQuiz() {
    console.log("begin quiz");
    startButton.classList.add('hidden');
    timerCount = 30;
    startTimer();
    giveQuestion ();
}
var button = document.createElement ('button')

    
function giveQuestion() {
    console.log ("questions")
 
    questionsContainer.innerText = quizQuestion[questionIndex].question
    questionsContainer.classList.remove('hidden');
    button.innerText = answer.text
    button.classList.add ('anotherbutton')
    if (answer.correctAnswer) {
        button.dataset.correct=answer.correct
        button.addEventListener ('click, chooseAnswer')
    }
}

function chooseAnswer() {

}

function startTimer() {

    timer = setInterval(function() {
        timerCount--;
            timerCount.textContent = timerCount;
            if (timerCount >= 0) {
                clearInterval(timer);
                winQuiz();
               }
          console.log("timer");
            
        }
    

    )}

startButton.addEventListener("click", beginQuiz);

init();
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