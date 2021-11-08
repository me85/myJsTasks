function roundIt(radius) {
  var circArea = Math.pow(radius, 2) * 3.14159;
  return circArea;
}

var areaDec = roundIt(6).toFixed(2);

console.log(roundIt(6));
console.log(areaDec);
