// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.

// line 16 there us miising coma on the function invoke ans const insted of let

// 2. Which debug method did you use to find the bug?

// i run the progran and look on the output

// 3. Explain the bug in your own words.
// inside the array there is pranthsis

// 4. Fix the code and submit it all.

function getSum(arr1, arr2) {
  let sum = 0;
  let sum1 = 0;

  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    sum1 += arr2[i];
  }
  return `${sum1}, ${sum}`;
}

console.log(getSum([1, 2, 3], [5, 66, 23]));
