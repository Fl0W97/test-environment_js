/* test with array
let allCountries = ['Germany', 'France', 'Poland', 'Italy', 'Spain', 'Belgium', 'Portugal', 'Austria', 'Netherlands']


let randomCountry = allCountries[Math.floor(Math.random()*allCountries.length)]

document.getElementById("questionbox").innerHTML = "What is the capital of " + randomCountry + " ?";

console.log("test connection"); */

/* country-capital database as object */
let allCountriesCapitals = {
    country: ['Germany', 'France', 'Poland', 'Italy', 'Spain', 'Belgium', 'Portugal', 'Austria', 'Netherlands'],
    capital: ['Berlin', 'Paris', 'Warsaw', 'Rome', 'Madrid', 'Brussels', 'Lissabon', 'Vienna', 'Amsterdam']
}

/* Initial score */
let highscore = 0;

// Function to shuffle arrays, according to Fisher-Yates shuffle algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const randomIndex = Math.floor(Math.random() * (i + 1));

        // Swap elements at current index and random index
        let temp = array[i]; // Store the current element in a temporary variable
        array[i] = array[randomIndex]; // Assign the randomly selected element to the current index
        array[randomIndex] = temp; // Assign the stored current element to the randomly selected index
    }

    }

function startQuiz ()

    // Shuffle the order of questions, take the CountiresCApital list index and shuffle the indices
    let shuffledIndexes = Array.from(Array(allCountriesCapitals.country.length).keys());
    shuffle(shuffledIndexes);

    // Iterate through each country and ask for its capital
    for (let i = 0; i < shuffledIndexes.length; i++) {
        let questionIndex = shuffledIndexes[i];
        let correctAnswer = allCountriesCapitals.capital[questionIndex];
        let wrongAnswer1 = allCountriesCapitals.capital[questionIndex] + 1;
        let wrongAnswer2 = allCountriesCapitals.capital[questionIndex] + 2;

        // Shuffle all answers (correct and wrong ones)
        let allAnswers = [correctAnswer, wrongAnswer1, wrongAnswer2];
        shuffle(allAnswers);

        // Show Question in relevant div
        document.getElementById("questionbox").innerHTML = "What is the capital of " + ${allCountriesCapitals.country[questionIndex] + " ?";

        // provide input for answers in HTML
        document.getElementById("answerbox1").innerHTML = ${allAnswers[0]};
        document.getElementById("answerbox2").innerHTML = ${allAnswers[1]};
        document.getElementById("answerbox3").innerHTML = ${allAnswers[2]};
        
        //Get answer
        let userAnswer = ...

        // Check if the user's answer is correct
        checkAnswer(userAnswer, correctAnswer);
}

// Function to check the user's answer
function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer && userAnswer === correctAnswer) {
        alert("Correct!");
        highscore++; // Increment score if the answer is correct
    } else {
        alert(`Incorrect! The correct answer is ${correctAnswer}`);
    }
}

// Start the quiz when the page loads
startQuiz();





/*define country variable for quiz question*/
let quizCountry = allCountriesCapitals.country[Math.floor(Math.random() * allCountriesCapitals.country.length)]
console.log(quizCountry);

document.getElementById("questionbox").innerHTML = "What is the capital of " + quizCountry + " ?";

/* define capital variables for quiz question, index tbd*/
let answerCapital = allCountriesCapitals.capital[]

/* define random capitals for multiple choice */
let randomCapital1 = allCountriesCapitals.capital[Math.floor(Math.random() * allCountriesCapitals.capital.length)]
let randomCapital2 = allCountriesCapitals.capital[Math.floor(Math.random() * allCountriesCapitals.capital.length)]

/* check random capitals if not positve define random capitals again*/
function checkRandomCapitals()
if (randomCapital1 AND randomCapital2  != answerCapital) AND (randomCapital1 != randomCapital2) {
    return check
} else {
    randomCapital1 = allCountriesCapitals.capital[Math.floor(Math.random() * allCountriesCapitals.capital.length)]
    randomCapital2 = allCountriesCapitals.capital[Math.floor(Math.random() * allCountriesCapitals.capital.length)]
    checkRandomCapitals()
}

/* collect all 3 variables in a list and shuffle them */
answerList = [answerCapital, randomCapital1, randomCapital2];


}





function checkAnswer ()
const feedback = document.getElementById("feedback");

if (selected === questions[currentQuestion].correct) {

  feedback.textContent = "Correct!";

  correctAnswers++;

} else {

  feedback.textContent = "Incorrect!.";

}
