// simple if else
function validPassWords(passWord) {
  if (passWord.length > 7) {
    return "strong";
  } else {
    return "weak";
  }
}

// ternary exmple

let validpass2 = (passWord2) => {
  return passWord2.length > 7 ? "strong" : "weak";
};

// console.log(validpass2("hh"));

// 3. Create a function that uses a && logical operator.

function validpass3(passWord3) {
  if (passWord3.length > 7 && passWord3.indexOf(" ") === -1) {
    return "strong";
  } else {
    return "weak";
  }
}

// console.log(validpass3("hhhhhhhh"));

// tarnery exmple

function validpass4(passWord4) {
  return passWord4.length > 7 && /[A-Z]/.test(passWord4)
    ? "vary strong"
    : passWord4.length > 7
    ? "strong"
    : "weak";
}

console.log(validpass4("HUHUUHUHUH"));
