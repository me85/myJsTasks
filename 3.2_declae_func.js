// From function declarations to explicit and implicit return functions (one of each).
function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}

function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}

// results

const welcome = () => "Welcome to Appleseeds Bootcamp!";

console.log(welcome());

const power = (a) => {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};
console.log(power(2));

// From function expressions to IIFE functions.
const squareRoot = (a) => Math.sqrt(a);

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

// results

(function (a) {
  Math.sqrt(a);
})(a);

//   run tis with 2

(function (a) {
  Math.sqrt(a);
})(2);

// result

(function (a, b) {
  Math.random() * (a - b) + b;
})(4, 5);
