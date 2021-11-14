// So that if you call this function with this array for example:
// ["boo", "doooo", "hoo","ro"]
// it will return this array: [3, 5, 3, 2]

function arrWordLength(arr) {
  index = 0;
  newArr = [];

  while (index < arr.length) {
    let element = arr[index];
    let x = element.length;
    newArr.push(x);
    index++;
  }
  return newArr;
}

let arr = ["boo", "doooo", "hoo", "ro"];

console.log(arrWordLength(arr));
