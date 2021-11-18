// 1. First find the line that contains the problem. Write it down.

// line 10  name of function when invoke it and it bring the biggest instead the  smallest

// 2. Which debug method did you use to find the bug?
//  my eyes and i try to put in function diffrent numbers
// 3. Explain the bug in your own words.
// syntex amd logic was wrong
// 4. Fix the code and submit it all

function findSmallest(a, b, c) {
  if (a > c && b > c) {
    return c;
  } else if (c > b && a > c) {
    return b;
  } else if (b > a && c > a) {
    return a;
  }
}

console.log(findSmallest(1, 2, 6));
