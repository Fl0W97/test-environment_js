// Define the object containing countries and capitals
let allCountriesCapitals = {
    country: ['Germany', 'France', 'Poland', 'Italy', 'Spain', 'Belgium', 'Portugal', 'Austria', 'Netherlands'],
    capital: ['Berlin', 'Paris', 'Warsaw', 'Rome', 'Madrid', 'Brussels', 'Lisbon', 'Vienna', 'Amsterdam']
};

// Function to shuffle arrays
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to start the quiz
function startQuiz() {
    // Shuffle the order of questions
    let shuffledIndexes = Array.from(Array(allCountriesCapitals.country.length).keys());
    shuffleArray(shuffledIndexes);

    // Iterate through each country and ask for its capital
    for (let i = 0; i < shuffledIndexes.length; i++) {
        let questionIndex = shuffledIndexes[i];
        let correctAnswer = allCountriesCapitals.capital[questionIndex];
        let wrongAnswers = generateWrongAnswers(correctAnswer);

        // Shuffle all answers (correct and wrong ones)
        let allAnswers = [correctAnswer, ...wrongAnswers];
        shuffleArray(allAnswers);

        // Prompt user with multiple choice
        let userAnswer = prompt(`What is the capital of ${allCountriesCapitals.country[questionIndex]}?\n\na) ${allAnswers[0]}\nb) ${allAnswers[1]}\nc) ${allAnswers[2]}`);
        
        // Check if the user's answer is correct
        checkAnswer(userAnswer, correctAnswer);
    }
    // After all questions are asked, show the score
    alert(`Quiz completed! Your score: ${score}/${allCountriesCapitals.country.length}`);
}

let score = 0; // Initialize score

// Function to generate wrong answers
function generateWrongAnswers(correctAnswer) {
    let wrongAnswers = [];

    // Get a random capital from the list (except the correct one)
    while (wrongAnswers.length < 2) {
        let randomIndex = Math.floor(Math.random() * allCountriesCapitals.capital.length);
        let randomCapital = allCountriesCapitals.capital[randomIndex];
        if (randomCapital !== correctAnswer && !wrongAnswers.includes(randomCapital)) {
            wrongAnswers.push(randomCapital);
        }
    }

    return wrongAnswers;
}

// Function to check the user's answer
function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert("Correct!");
        score++; // Increment score if the answer is correct
    } else {
        alert(`Incorrect! The correct answer is ${correctAnswer}`);
    }
}

// Start the quiz when the page loads
startQuiz();