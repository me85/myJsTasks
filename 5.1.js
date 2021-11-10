// isIsland’s argument value should be true or false.
// population’s argument value should be an integer.
// country should be a string of a country.
// Language should be a string.
// 2. Let's say Sarah is looking for a new country to live in.
// She wants to live in a country that speaks English, has less
// than 50 million people and is not an island.

function countryToLiveIn(language, isIsland, population, country) {
  return language !== "English"
    ? console.log("Shara wont live where people speak english")
    : isIsland
    ? console.log("Shara  wont  live in Island")
    : population > 500000
    ? console.log("Shara wont  live where vary big population")
    : console.log(`shara will want to live ${country}`);
}

let isIsland = false;
let population = 1000;

countryToLiveIn("English", isIsland, population, "finland");
