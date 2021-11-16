const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

// a.1. Sort the array of strings from descending to ascending
// order

foods.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});

console.log(foods);

// a.2. Sort the array of strings from ascending to descending
// order.

foods.sort();
console.log(foods);

// b. Lets sort an array of words that includes a word with an
// uppercase

// b.2. Sort the array of strings from ascending to descending
// orde

const foods = ["falafel", "sabich", "Hummus", "pizza with extra pineapple"];

foods.sort(function (a, b) {
  let x = a.toUpperCase(),
    y = b.toUpperCase();
  return x == y ? 0 : x > y ? 1 : -1;
});

console.log(foods);

// b.1. Sort the array of strings from descending to ascending
// order.
const foods = ["falafel", "sabich", "Hummus", "pizza with extra pineapple"];

foods.sort(function (a, b) {
  let x = a.toUpperCase(),
    y = b.toUpperCase();
  return y == x ? 0 : y < x ? -1 : 1;
});

console.log(foods);

// c. Longest word
// c.1. Sort the array of strings from the longest word to the
// shortest word only using the sort function

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

words.sort(function (a, b) {
  let x = a.length,
    y = b.length;
  return x == y ? 0 : x > y ? 1 : -1;
});
console.log(words);
