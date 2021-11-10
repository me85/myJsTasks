// 1. Using a loop, iterate through this array and console.log all of the people.

const people = ["Greg", "Mary", "Devon", "James"];

for (let index = 0; index < people.length; index++) {
  const element = people[index];
  console.log(element);
}

// 2. Write the command to remove "Greg" from the array.
console.log(people.shift());

// 3. Write the command to remove "James" from the array.
const people = ["Greg", "Mary", "Devon", "James"];

console.log(people.pop());

// 4. Write the command to add "Matt" to the front of the array.

console.log(people.unshift("Meital"));

// 5. Write the command to add your name to the end of the array.

console.log(people.push("Meital"));

// Using a loop, iterate through this array and after console.log-ing "Mary",
// exit from the loop.

const people = ["Greg", "Mary", "Devon", "James"];

for (let index = 0; index < people.length; index++) {
  const element = people[index];
  if (element === "Devon") {
    break;
  }
  console.log(element);
}

// Write the command to make a copy of the array using slice. The copy
// should NOT include "Mary" or "Matt"

console.log(people.slice(2, 4));

// 8. Write the command that gives the indexOf where "Mary" is located.

console.log(people.indexOf("Mary"));

// 9. Write the command that gives the indexOf where "Foo" is located (this
//     should return -1).

console.log(people.indexOf("Foo"));

//     10. Redefine the people variable with the value you started with. Using the
//     splice command, remove "Devon" from the array and add "Elizabeth"
//     const people = ["Greg", "Mary", "Devon", "James"];
//     and "Artie". Your array should look like this when you are done ["Greg",
//     "Mary", "Elizabeth", "Artie", "James"].

// create a new variable called withBob and set it equal to the people
// array concatenated with the string of "Bob"

Array.prototype.splice();

// 2 last one ddint did good
