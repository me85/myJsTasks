const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function keyValue(array) {
  let newObj = {};
  for (let index = 0; index < array.length; index++) {
    // let element = array[index].length;
    // x = array[index][0];
    newObj[array[index][0]] = array[index].length;
  }
  return newObj;
}

console.log(keyValue(array));
