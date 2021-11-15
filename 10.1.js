//  1

function callback() {
  console.log(" Yes is a string");
}

function isString(anyType, callback) {
  if (typeof anyType === typeof "njnj") {
    callback();
  }
}

isString("dan", callback);

// 2
// is it correct?

function callback(capitalSentence) {
  return capitalSentence.replace(/\s+/g, "-");
}

function firstWordUpperCase(mySentence, callback) {
  let capitalSentence = mySentence.replace(/(^\w{1})/, (letter) => letter.toUpperCase());

  return callback(capitalSentence);
}
console.log(firstWordUpperCase("meital drukman", callback));

// 3

// Call the ‘firstWordUpperCase’ function with a callback of
// your choice

function callback(capitalSentence) {
  console.log(capitalSentence);
}

function firstWordUpperCase(mySentence, callback) {
  let capitalSentence = mySentence.replace(/(^\w{1})/, (letter) => letter.toUpperCase());

  callback(capitalSentence);
}

firstWordUpperCase("meital drukman", callback);

// 4. Create your own function that will receive from one of its
// arguments a callback function.

function callTwice(callback) {
  callback();
  callback();
}

function callback() {
  console.log("loveeee");
}

callTwice(callback);
