// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.

const oneArr = [1, 7, 3, 0, 5, 7, 3, 9];

const doubleValues = oneArr.map(function (num) {
  return num * 2;
});

console.log(doubleValues);

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function

let arr = [1, 7, 3, 0, 6, 4, 3, 9];

// to ask why is [0][6][4] ???????

arr.forEach(function (number) {
  let newArr = [];
  if (number % 2 === 0) {
    newArr.push(number);
    console.log(newArr);
  }
});

//3.  Write a function called showFirstAndLast which accepts an array as an argument
//  and returns a new array with strings that have only the first and last characters of each string in the input array.
// It should ignore array elements that are not strings.
// For example:
// input: [1, 'abc', 'ab', 5', 'abcd', 'a']
// output: ['ac', 'ab', 'ad', 'a']

let arr1 = [1, "abc", "ab", 5, "abcd", "a"];

function showFirstAndLast(arr) {
  let newarr1 = [];

  arr.forEach(function (element) {
    if (typeof element !== "string") {
      return;
    }
    if (element.length > 1) {
      let newWord = element.substring(0, 1) + element.slice(-1);
      newarr1.push(newWord);
    } else if (element.length === 1) {
      newarr1.push(element);
    }
  });
  return newarr1;
}

console.log(showFirstAndLast(arr1));

// 4. Write a function called vowelCount which accepts a
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.

function vowelCount(str) {
  let vowelArr = str.split("");

  let obj = {
    v: 0,
    o: 0,
    w: 0,
    e: 0,
  };

  let objCountVowel = vowelArr.forEach((obj) => {
    let vowel = element;
    switch (vowel) {
      case "v":
        return obj["v"]++;
      case "o":
        return obj["o"]++;
      case "w":
        return obj["w"]++;
      case "e":
        return obj["e"]++;
    }
  });
  return objCountVowel;
}
let str = "vowevowe";
console.log(vowelCount(str));

// not working

// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.

function capitalize(str) {
  let newArr = [];
  let notCapital = str.split("");
  notCapital.forEach(function (element) {
    let x = element.toUpperCase();
    newArr.push(x);
  });
  return newArr.join("");
}

console.log(capitalize("meital"));

// 6. Write a function called shiftLetters that takes a string as
// an argument and return’s an encoded string with each
// letter shifted down the alphabet by one

// ?????

// Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)
