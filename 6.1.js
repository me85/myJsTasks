// Create array with numbers :
// const arr = [1,7,3,0,-5,7,3,9];
// 1. Print with for loop all the number.
// 2. Create function “arrayLength” that return the array length (don’t use arr.length)
// 3. Create function “arraySum” , the function return the sum of all elements in array.
// 4. Create function “arrayMulti” , the function return the multiplication of all the
// elements in array.

// print arr

const arr = [1, 7, 3, 0, -5, 7, 3, 9];

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}

// 2. Create function “arrayLength” that return the array length (don’t use arr.length)

const arrayLength = (arr) => {
  let count = 0;

  for (let index = 0; index < arr.length; index++) {
    count++;
  }
  return count;
};

console.log(arrayLength(arr));

// 3. Create function “arraySum” , the function return the sum of all elements in array.

const arr4 = [1, 7, 3, 0, -5, 7, 3, 9];

const arraySum = (arr4) => {
  let sum = 0;
  for (let index = 0; index < arr4.length; index++) {
    sum += arr4[index];
  }
  return sum;
};

console.log(arraySum(arr4));

// 4. Create function “arrayMulti” , the function return the multiplication of all the

const arr5 = [1, 7, 3, 0, -5, 7, 3, 9];

const arraymulty = (arr5) => {
  let multy = 0;
  for (let index = 0; index < arr5.length; index++) {
    multy *= arr5[index];
  }
  return multy;
};

console.log(arraymulty(arr5));
