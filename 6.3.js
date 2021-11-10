let arr = ["boo", "doooo", "hoo", "ro"];

function arrWordLength(array) {
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    let x = element.length;
    console.log(x);
    array = array.push(x);
  }
  let newArray = array.slice(5, 9);
  return newArray;
}

console.log(arrWordLength(arr));

// not working
