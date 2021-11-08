// Create a function that takes 1 argument, a number score.
// Returns either “A”, ”B”, “C”, “D”, “F”.
// score of:
// 0-64 is a “F”
// 65-69 is a “D”
// 70-79 is a “C”
// 80-89 is a “B”
// 90-100 is an “A

function numScore(score) {
  if (0 < score && score <= 64) {
    return "F";
  } else if (65 <= score && score <= 69) {
    return "D";
  } else if (70 <= score && score <= 79) {
    return "C";
  } else if (80 <= score && score <= 89) {
    return "B";
  } else if (90 <= score && score <= 100) {
    return "A";
  }
}

console.log(numScore(80));
