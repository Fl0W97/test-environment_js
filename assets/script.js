/* test with array
let allCountries = ['Germany', 'France', 'Poland', 'Italy', 'Spain', 'Belgium', 'Portugal', 'Austria', 'Netherlands']


let randomCountry = allCountries[Math.floor(Math.random()*allCountries.length)]

document.getElementById("questionbox").innerHTML = "What is the capital of " + randomCountry + " ?";

console.log("test connection");

/* country-capital database as object */
let allCountriesCapitals = {
    country: ['Germany', 'France', 'Poland', 'Italy', 'Spain', 'Belgium', 'Portugal', 'Austria', 'Netherlands'],
    capital: ['Berlin', 'Paris', 'Warsaw', 'Rome', 'Madrid', 'Brussels', 'Lissabon', 'Vienna', 'Amsterdam']
}

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

shuffle(answerList);

document.getElementById("answerbox1").innerHTML = answerList[0];
document.getElementById("answerbox2").innerHTML = answerList[1];
document.getElementById("answerbox3").innerHTML = answerList[2];