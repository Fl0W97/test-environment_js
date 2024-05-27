/* country-capital database as object */
let allCountriesCapitals = {
    country: ['Germany', 'France', 'Poland', 'Italy', 'Spain', 'Belgium', 'Portugal', 'Austria', 'the Netherlands'],
    capital: ['Berlin', 'Paris', 'Warsaw', 'Rome', 'Madrid', 'Brussels', 'Lissabon', 'Vienna', 'Amsterdam']
};

let highscore = 0;

// Generate a random index to select a country
let randomIndex = Math.floor(Math.random() * allCountriesCapitals.country.length);

// Get the random country using the random index
let randomCountry = allCountriesCapitals.country[randomIndex];

document.getElementById("box_questions").innerHTML = "What is the capital of " + randomCountry + " ?";

// Define correct Answer
let correctAnswer = allCountriesCapitals.capital[randomIndex];

// using the modulo operator % to wrap around to the beginning of the array if the index exceeds its length
let wrongAnswer1 = allCountriesCapitals.capital[(randomIndex + 1) % allCountriesCapitals.capital.length];
let wrongAnswer2 = allCountriesCapitals.capital[(randomIndex + 2) % allCountriesCapitals.capital.length];

let allAnswers = [correctAnswer, wrongAnswer1, wrongAnswer2];

// provide input for answers in HTML
document.getElementById("box1").innerHTML = allAnswers[0];
document.getElementById("box2").innerHTML = allAnswers[1];
document.getElementById("box3").innerHTML = allAnswers[2];

//show highscore
document.getElementById("highscore").innerHTML = "Highscore is: " + highscore;

// Get reference to answer options
const answerOptions = document.querySelectorAll('.answer');

// Add event listener to each answer option
answerOptions.forEach(answer => {
    answer.addEventListener('click', handleClick);
});

// provide feedback for user
function handleClick(event) {
    // get user's answer
    let userAnswer = event.target.textContent;
    // check answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedbackForUser").innerHTML = "Correct!";
        highscore = highscore + 1;
        document.getElementById("highscore").innerHTML = "Highscore is: " + highscore; // Update highscore display
    } else {
        document.getElementById("feedbackForUser").innerHTML = "Incorrect! The correct answer is " + correctAnswer;
    }
}