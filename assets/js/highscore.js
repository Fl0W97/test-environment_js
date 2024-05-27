// DOM load
document.addEventListener("DOMContentLoaded", function () {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    console.log(highScores);


    // reused code: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    
    // combine two parameter name and score
    function getNameScore(item) {
        return [item.name, item.score].join(" ");
      }
    
    // create for each entry one list element
    function createList() {
        document.getElementById('highScoreList').innerHTML = highScores.map((highScore) => {
          return `<li>${ getNameScore(highScore) }</li>`;
        }).join('');
    }
    
    createList();
    
});