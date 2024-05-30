// DOM load
document.addEventListener("DOMContentLoaded", function () {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    // reused code: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    
    // combine two parameter name and score
    function getNameScore(item) {
        return [item.name, item.score].join(" ");
      }
    
    // create for each entry one list element
    function createList() {
      highScores.sort(function(x, y) {
        return y.score - x.score;
      });

      highScores.splice(10);
      console.log(highScores);

        document.getElementById('highScoreList').innerHTML = highScores.map((highScore) => {
          return `<li class='highscore'>${ getNameScore(highScore) }</li>`;
        }).join('');
    }

    createList();
    
});

/*
1. create an additional array
2. add the new value to the array
3. resort the array

4. once the array has more than 10 values
Check if the new score is greater than the lowest value:
  If yes, pop the lowest value out of the arraw and add the new value in the array. 
  If no, don't add the value to the array.
  Resort array.

*/