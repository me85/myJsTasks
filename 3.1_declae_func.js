// Instructions
//     * Please reformat the following function declarations to function expression.
//     * Please reformat the following function expressions to function declarations.

// From function declarations to function expressions
function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}

function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}

function add(a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
}

// results

const welcome = function () {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
};
console.log(welcome());

const power = function (a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};
console.log(power(3));

const add = function (a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
};

const add = function (a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
};

console.log(add(6));

// From function expressions to function declarations
const hello = () => "Hello!";

const squareRoot = (a) => Math.sqrt(a);

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

// results

function hello() {
  return "HELLO!";
}

console.log(hello());

function squareRoot(a) {
  return Math.sqrt(a);
}

let x = squareRoot(6);
console.log(x);

function randomNumbers(a, b) {
  return Math.random() * (a - b) + b;
}

console.log(randomNumbers(1, 1));
