// What is wrong with this code?
// 1. First find the line that contains the problem. Write it
// down.
// 2. Which debug method did you use to find the bug?

// i watch counter
// 3. Explain the bug in your own words.
// adding +1 to counter was wrong

// 4. Fix the code and submit it all.

function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter++;
    }
  }
  return counter;
}

console.log(countOccurrences("ini mini miny moe", "n"));
