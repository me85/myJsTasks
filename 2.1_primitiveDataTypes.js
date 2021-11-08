function describeCountry(country, population, capitalCity) {
  let result = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return result;
}

let isreal = describeCountry("isreal", "9", "tlv");
let usa = describeCountry("usa", "25", "new-york");
let france = describeCountry("france", "55", "paris");

console.log(isreal);
console.log(usa);
console.log(france);
