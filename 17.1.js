var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
console.log(result);
// return 5  no use of 2 and 9

var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
console.log(b2());
console.log(a);

// a == 1 outside  ruturn ant fumc a will not invoke
// b2 unfeifinde

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);

  // 3 times tree
}
