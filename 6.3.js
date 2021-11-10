let arr = ["boo", "doooo", "hoo", "ro"];

function arrWordLength(array) {
  let array1 = [];
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    let x = element.length;
    array1.push(x);
  }
  return array1;
}

console.log(arrWordLength(arr));
