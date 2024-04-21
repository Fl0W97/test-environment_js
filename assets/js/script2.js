/* country-capital database as object, first 20 */
let allCountriesCapitals = {
    country: ['Albania', 'Andorra', 'Austria', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia', 'Germany', 'Gibraltar (UK)', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo', 'Lativa', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Vatican City'],
    capital: ['Tirana', 'Andorra la Vella', 'Vienna', 'Minsk', 'Brussels', 'Sarajevo', 'Sofia', 'Zagreb', 'Nicosia', 'Prague', 'Copenhagen', 'Tallin', 'Helsinki', 'Paris', 'Tbilisi', 'Berlin', 'Gibraltar', 'Athens', 'Budapest', 'Reykjavik', 'Dublin', 'Rome', 'Pristina', 'Riga', 'Vaduz', 'Vulnius', 'Luxembourg city', 'Skopje', 'Valletta', 'Chisinau', 'Monaco', 'Podgorica', 'Amsterdam', 'Oslo' , 'Warsaw', 'Lisbon', 'Bucharest', 'Moscow', 'San Marino', 'Belgrade', 'Bratislava', 'Ljubljana', 'Madrid', 'Stockholm', 'Bern', 'Ankara', 'Kiev', 'London', 'Vatican City']
};

//Add highscore
let highscore = 0;
document.getElementById("highscore").innerHTML = "Highscore is: " + highscore;

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

let correctAnswer;

// Function to generate a question
function generateQuestion() {

    // Generate a random index to select a country
    let randomIndex = Math.floor(Math.random() * allCountriesCapitals.country.length);

    // Get the random country using the random index
    let randomCountry = allCountriesCapitals.country[randomIndex];

    document.getElementById("box_questions").innerHTML = "What is the capital of " + randomCountry + " ?";

    // Define correct Answer
    correctAnswer = allCountriesCapitals.capital[randomIndex];

    // using the modulo operator % to wrap around to the beginning of the array if the index exceeds its length
    let wrongAnswer1 = allCountriesCapitals.capital[(randomIndex + 1) % allCountriesCapitals.capital.length];
    let wrongAnswer2 = allCountriesCapitals.capital[(randomIndex + 2) % allCountriesCapitals.capital.length];

    let allAnswers = [correctAnswer, wrongAnswer1, wrongAnswer2];

    // shuffle through list allAnswers that that the right answer is not always on the same index
    shuffle(allAnswers);

    // provide input for answers in HTML
    document.getElementById("box1").innerHTML = allAnswers[0];
    document.getElementById("box2").innerHTML = allAnswers[1];
    document.getElementById("box3").innerHTML = allAnswers[2];

}

// Provide feedback for user
function clickAnswer(event) {
    let userAnswer = event.target.textContent;

    // check answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedbackForUser").innerHTML = "Correct!";
        highscore++;
        document.getElementById("highscore").innerHTML = "Highscore is: " + highscore;
    } else {
        document.getElementById("feedbackForUser").innerHTML = "Incorrect! The correct answer is " + correctAnswer;
    }

    generateQuestion(); // Generate a new question after each answer

}

// Generate the first question
generateQuestion();

// Get all elements with the class name "answer"
let answerElements = document.getElementsByClassName("answer");

// Loop through each answer element and add event listener to it
for (let i = 0; i < answerElements.length; i++) {
    answerElements[i].addEventListener('click', clickAnswer);
}
