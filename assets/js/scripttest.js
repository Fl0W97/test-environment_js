let allCountriesCapitals = {
    country: ['Germany', 'France', 'Poland', 'Italy', 'Spain', 'Belgium', 'Portugal', 'Austria', 'the Netherlands'],
    capital: ['Berlin', 'Paris', 'Warsaw', 'Rome', 'Madrid', 'Brussels', 'Lissabon', 'Vienna', 'Amsterdam']
}

// Initialize highscore
const highscore = 0;


// Generate a random index to select a country
let randomIndex = Math.floor(Math.random() * allCountriesCapitals.country.length);

// Get the random country using the random index
let randomCountry = allCountriesCapitals.country[randomIndex];


document.getElementById("box_questions").innerHTML = "What is the capital of " + randomCountry + " ?";

let correctAnswer = allCountriesCapitals.capital[randomIndex];

// using the modulo operator % to wrap around to the beginning of the array if the index exceeds its length
let wrongAnswer1 = allCountriesCapitals.capital[(randomIndex + 1) % allCountriesCapitals.capital.length];
let wrongAnswer2 = allCountriesCapitals.capital[(randomIndex + 2) % allCountriesCapitals.capital.length];

let allAnswers = [correctAnswer, wrongAnswer1, wrongAnswer2]

// provide input for answers in HTML
document.getElementById("answerbox1").innerHTML = allAnswers[0];
document.getElementById("answerbox2").innerHTML = allAnswers[1];
document.getElementById("answerbox3").innerHTML = allAnswers[2];

/* Add event listeners to answer boxes
document.getElementById("answerbox1").addEventListener("click", handleClick);
document.getElementById("answerbox2").addEventListener("click", handleClick);
document.getElementById("answerbox3").addEventListener("click", handleClick);
*/

document.getElementById("highscore").innerHTML = "Highscore is: " + highscore;


function handleClick(event) {
    // get user's answer
    let userAnswer = event.target.textContent;
    // check answer
    if (userAnswer === correctAnswer) {
        document.getElementById("answer").innerHTML = "Correct!";
        highscore++; // Increment score if the answer is correct
        // Show updated highscore
    } else {
        document.getElementById("answer").innerHTML = "Incorrect! The correct answer is" + correctAnswer;
    }
}


