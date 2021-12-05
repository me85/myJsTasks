// In your own words what will this point to and why?(Note
//     this is the global scope)
console.log(this);

// this will point to the window object

// Question 2:
// a. In your own words what will this point to and why.  point to window be cuase its arrow function
// b. How can you fix this code. to make it regular function
const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();

// Question 3:
// In your own words what will this point to and why? point to window my func dont defined
const myFuncDec = function () {
  console.log(this);
};

// Question 4:
// In your own words what will this point to and why? point to window my func dont defined aarrow doesnt have is own this
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();

// Question 5:
// a. In your own words what will this point to and why.  point to window
// b. How can you fix this code.  regular function ??
document.querySelector(".element").addEventListener(() => {
  console.log(this);
});

document.querySelector(".element").addEventListener(function name() {
  console.log(this);
});
