/* country-capital database as object */
let allCountriesCapitals = {
    country: ['Germany','France','Poland','Italy','Spain','Belgium','Portugal','Austria','Netherlands'],
    capital: ['Berlin','Paris','Warsaw','Rome','Madrid','Brussels','Lissabon','Vienna','Amsterdam'] 
}

let allCountries = ['Germany','France','Poland','Italy','Spain','Belgium','Portugal','Austria','Netherlands']


/* let randomCountry = allCountries[Math.floor(Math.random()*list.length)] */

let randomCountry = allCountries[Math.floor(Math.random()*allCountries.length)]

document.getElementById("questionbox").innerHTML = "What is the capital of " + randomCountry + " ?";

console.log("test connection");