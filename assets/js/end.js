
document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById('username');
    const saveScoreButton = document.getElementById('saveScoreBtn');
    const finalScore = document.getElementById('finalScore');
    const mostRecentScore = localStorage.getItem('mostRecentScore');

    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    finalScore.innerText = mostRecentScore;

    if (mostRecentScore) {
        finalScore.innerText = `Your Score: ${mostRecentScore}`;
    } else {
        finalScore.innerText = 'No score available';
    }

    saveScoreButton.addEventListener('click', saveHighScore);

    function saveHighScore(event) {
        event.preventDefault(); // Prevent the form from submitting if it's inside a form
        
        console.log('clicked the save button');
        const username = usernameInput.value.trim(); // Get the trimmed value from the input field

        console.log('username:', username);
        console.log('mostRecentScore:', mostRecentScore);
    
        const score = {
            score: mostRecentScore,
            name: username,
        };
        
        highScores.push(score);
    
        localStorage.setItem('highScores', JSON.stringify(highScores));
        console.log('highScores after push:', highScores);

        // Provide some feedback to the user
        alert("High score saved!");

        // Optional: Clear the username input after saving
        usernameInput.value = "";
    }
});
