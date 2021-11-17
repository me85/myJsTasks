// Write the following functions using the reduce built-in function.
// 1. max
// 2. sum of even numbers
// 3. average

const nums = [3, 4, 70, 6, 7];
// To multiply all values in nums:
const resultMax = nums.reduce((max, currentVal) => {
  if (max > currentVal) {
    return max;
  } else {
    return currentVal;
  }
});

console.log(resultMax);

const resultSum = nums.reduce((sum, currentVal) => {
  return sum + currentVal;
});
console.log(resultSum);

function average(nums) {
  return nums.reduce((a, b) => a + b) / nums.length;
}

console.log(average(nums));
