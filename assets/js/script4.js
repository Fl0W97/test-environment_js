// country-capital database as nested list

const CountriesCapitals = [{
    country: "Albania",
    capital: "Tirana"
},
{
    country: "Andorra",
    capital: "Andorra la Vella"
},
{
    country: "Austria",
    capital: "Vienna"
},
{
    country: "Belarus",
    capital: "Minsk"
},
{
    country: "Belgium",
    capital: "Brussels"
},
{
    country: "Bosnia and Herzegovina",
    capital: "Sarajevo"
},
{
    country: "Bulgaria",
    capital: "Sofia"
},
{
    country: "Croatia",
    capital: "Zagreb"
},
{
    country: "Cyprus",
    capital: "Nicosia"
},
{
    country: "Czech Republic",
    capital: "Prague"
},
{
    country: "Denmark",
    capital: "Copenhagen"
},
{
    country: "Estonia",
    capital: "Tallin"
},
{
    country: "Finland",
    capital: "Helsinki"
},
{
    country: "France",
    capital: "Paris"
},
{
    country: "Georgia",
    capital: "Tbilisi"
},
{
    country: "Germany",
    capital: "Berlin"
},
{
    country: "Gibraltar (UK)",
    capital: "Gibraltar"
},
{
    country: "Greece",
    capital: "Athens"
},
{
    country: "Hungary",
    capital: "Budapest"
},
{
    country: "Iceland",
    capital: "Reykjavik"
},
{
    country: "Ireland",
    capital: "Dublin"
},
{
    country: "Italy",
    capital: "Rome"
},
{
    country: "Kosovo",
    capital: "Pristina"
},
{
    country: "Lativa",
    capital: "Riga"
},
{
    country: "Liechtenstein",
    capital: "Vaduz"
},
{
    country: "Lithuania",
    capital: "Vulnius"
},
{
    country: "Luxembourg",
    capital: "Luxembourg city"
},
{
    country: "Macedonia",
    capital: "Skopje"
},
{
    country: "Malta",
    capital: "Valletta"
},
{
    country: "Moldova",
    capital: "Chisinau"
},
{
    country: "Monaco",
    capital: "Monaco"
},
{
    country: "Montenegro",
    capital: "Podgorica"
},
{
    country: "Netherlands",
    capital: "Amsterdam"
},
{
    country: "Norway",
    capital: "Oslo"
},
{
    country: "Poland",
    capital: "Warsaw"
},
{
    country: "Portugal",
    capital: "Lisbon"
},
{
    country: "Romania",
    capital: "Bucharest"
},
{
    country: "Russia",
    capital: "Moscow"
},
{
    country: "San Marino",
    capital: "San Marino"
},
{
    country: "Serbia",
    capital: "Belgrade"
},
{
    country: "Slovakia",
    capital: "Bratislava"
},
{
    country: "Slovenia",
    capital: "Ljubljana"
},
{
    country: "Spain",
    capital: "Madrid"
},
{
    country: "Sweden",
    capital: "Stockholm"
},
{
    country: "Switzerland",
    capital: "Bern"
},
{
    country: "Turkey",
    capital: "Ankara"
},
{
    country: "Ukraine",
    capital: "Kiev"
},
{
    country: "United Kingdom",
    capital: "London"
},
{
    country: "Vatican City",
    capital: "Vatican City"
},
];

// user input relevant for modeTypeAnswer = userInput
let userName = document.getElementById('username');
let numberQuestions = document.getElementById('noOfQuestions').value;
let userInput;

//boxes for hide/ display
let box_answers = document.getElementById("box_answers");

// // Initialize variables/constants
let index = 0; // Initialize index outside the function
let modeTypeQuestion;
let modeTypeAnswer;
let wrongAnswer;
let correctAnswer;
let userAnswer;
 

// answers multiple choice
const answer1 = document.getElementById("box1");
const answer2 = document.getElementById("box2");
const answer3 = document.getElementById("box3");

// highscore
const mostRecentScore = localStorage.getItem('mostRecentScroe');
let highscore;

// DOM load
document.addEventListener("DOMContentLoaded", function() {
    
    // Add event listener to the 'Start Quiz' button
    const startQuizButton = document.getElementById('button');
    startQuizButton.addEventListener('click', startQuiz);

    /* Add event listener to the 'Save Score' button
    const saveScoreButton = document.getElementById('SaveScoreBtn');
    if (saveScoreButton) {
        saveScoreButton.addEventListener('click', function() {
            if (this.getAttribute("type") === "submit") {
                userName = document.getElementById('username').value;
                if (userName) {
                    userName.disabled = true; // Disable input after saving
                    console.log("You clicked Save! Username: " + userName);
                    localStorage.setItem('username', userName);
                    localStorage.setItem('highscore', highscore);
                } else {
                    console.log("Username is required to save the score.");
                }
            } else {
                console.log("You clicked not Submit!");
            }
        });
    } else {
        console.error("SaveScoreBtn element not found.");
    }

*/
    
    // Add event listeners to multiple choice answer options
    const answerElements = document.getElementsByClassName("answer");
    for (let i = 0; i < answerElements.length; i++) {
        answerElements[i].addEventListener('click', clickAnswer);
    }
});

// Function to start the quiz
function startQuiz() {
    index = 0;
    highscore = 0;

    document.getElementById('gameoverbox').style.visibility = 'hidden';
    document.getElementById('quiz_questions').style.visibility = 'inherit';
    document.getElementById('quiz_settings').style.visibility = 'hidden';

    shuffle(CountriesCapitals);
    console.log(CountriesCapitals);

    saveModeSettings();
    console.log(modeTypeQuestion);
    console.log(modeTypeAnswer);
    console.log(numberQuestions);

    displayNextQuestion();
}

// Function to handle answer clicks
function clickAnswer(event) {
    const selectedAnswer = event.target.textContent;
    handleUserAnswer(selectedAnswer);
}

// Function to start the quiz
function startQuiz() {
    index = 0;
    highscore = 0;

    // Shuffle each time the quiz starts
    shuffle(CountriesCapitals);
    console.log(CountriesCapitals);

    // Initialize modeTypeQuestion and modeTypeAnswer based on checkbox settings
    saveModeSettings();
    console.log(modeTypeQuestion);
    console.log(numberQuestions);

    displayNextQuestion()
}

// relevant for MultiplyChoice 

// Get all elements with the class name "answer"
let answerElements = document.getElementsByClassName("answer");


// Loop through each answer element and add event listener to it
for (let i = 0; i < answerElements.length; i++) {
answerElements[i].addEventListener('click', clickAnswer);
}

// Add event listener to the 3 optional answer options and trigger the function checkAnswer()
function clickAnswer(event) {
userAnswer = event.target.textContent;
checkAnswer();
}

// Function to display the next question or end the quiz if all questions have been answered
function displayNextQuestion() {
    if (index < numberQuestions) {
        displayQuestionAnswer();
        console.log('displayNextQuestion');
        index++;
        console.log('display index:' + index);
        console.log('highscore:' + highscore);
    } else {
        // No more questions left, end the game
        gameOver();
    }
}

// Function to handle the user's answer
function handleUserAnswer(answer) {
    userAnswer = answer;
    checkAnswer();
    // After checking the answer, proceed to the next question
    displayNextQuestion();
}

// Function to handle the user's input
function handleUserInput(userInput) {
    userAnswer = userInput;
    checkAnswer();
    // After checking the answer, proceed to the next question
    displayNextQuestion();
}

// Add event listener to the 3 optional answer options and trigger the function handleUserAnswer()
function clickAnswer(event) {
    const selectedAnswer = event.target.textContent;
    handleUserAnswer(selectedAnswer);
}

// Function to shuffle arrays, according to Fisher-Yates shuffle algorithm
function shuffle(array) {
for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const randomIndex1 = Math.floor(Math.random() * (i + 1));

    // Swap elements at current index and random index
    let temp = array[i]; // Store the current element in a temporary variable
    array[i] = array[randomIndex1]; // Assign the randomly selected element to the current index
    array[randomIndex1] = temp; // Assign the stored current element to the randomly selected index
}
}

function saveModeSettings() {
// get the checkbox
var checkBoxQ = document.getElementById('CheckboxQuestion');

// Show the status of the checkbox
if (checkBoxQ.checked == true) {
    console.log('Question checkbox is checked');
    modeTypeQuestion = "capital";
} else {
    console.log('Question checkbox is unchecked');
    modeTypeQuestion = "country";
}

}

// Show Question deepending on the setting choice
function displayQuestionAnswer() {
switch (modeTypeQuestion) {
    case 'capital':
        displayQuestionCapital();
        displayMultipleChoice();
        // hide input box 4
        // box_answers.style.visibility = 'inherit';
        // userAnswerIn.style.visibility = 'hidden';
        console.log('capital');
        console.log('Answer User:' + userAnswer);
        console.log('Input User:' + userInput);       
        break;
    case 'country':
        displayQuestionCountry();
        displayMultipleChoice();
        // hide input box 4
        // box_answers.style.visibility = 'inherit';
        // userAnswerIn.style.visibility = 'hidden';
        console.log('country');
        console.log('Answer User:' + userAnswer);
        console.log('Input User:' + userInput);          
}
}

// Show question and define the right capital accordingly to the index 
function displayQuestionCapital() {
const currentQuestion = CountriesCapitals[index];

document.getElementById("box_questions").innerHTML = "What is the capital of " + currentQuestion.country + " ?";
correctAnswer = currentQuestion.capital;
console.log('correct answer defined. It is ' + correctAnswer);
}

// Show question and define the right country accordingly to the index
function displayQuestionCountry() {
const currentQuestion = CountriesCapitals[index];

document.getElementById("box_questions").innerHTML = currentQuestion.capital + " is the capital of which country?";
correctAnswer = currentQuestion.country;
console.log('correct answer defined. It is ' + correctAnswer);
}

function displayMultipleChoice() {

// using the modulo operator % to wrap around to the beginning of the array if the index exceeds its length
if (modeTypeQuestion == "country") {
    wrongAnswer1 = CountriesCapitals[(index + 1) % CountriesCapitals.length].country;
    wrongAnswer2 = CountriesCapitals[(index + 2) % CountriesCapitals.length].country;
} else if (modeTypeQuestion === "capital") {
    wrongAnswer1 = CountriesCapitals[(index + 1) % CountriesCapitals.length].capital;
    wrongAnswer2 = CountriesCapitals[(index + 2) % CountriesCapitals.length].capital;
}


let allAnswers = [correctAnswer, wrongAnswer1, wrongAnswer2];
console.log(allAnswers);

// shuffle through list allAnswers so that the right answer is not always on the same index
shuffle(allAnswers);

// provide input for answers in HTML
answer1.innerHTML = allAnswers[0];
answer2.innerHTML = allAnswers[1];
answer3.innerHTML = allAnswers[2];
}

// check answer
function checkAnswer() {
if (userAnswer === correctAnswer) {
    document.getElementById("feedbackForUser").innerHTML = "Correct!";
    highscore++;
    document.getElementById("highscore").innerHTML = "Highscore is: " + highscore;
    console.log('check is done.')
} else {
    document.getElementById("feedbackForUser").innerHTML = "Incorrect! The correct answer is " + correctAnswer;
}
}

// The game is over: Alert, add highscore to highscoreList, not working yet !!!!
function gameOver() {
    // quiz_settings.style.visibility = 'inherit';
    // quiz_questions.style.visibility = 'hidden';
    console.log('highscore is: ' + highscore);
    alert('The game is over. Your highscore is: ' + highscore);
    // localStorage.setItem('mostRecentScore', highscore);
    window.location.replace('/end.html');
}

function saveHighScore(e)  {
    console.log("clicked the save button!");
}