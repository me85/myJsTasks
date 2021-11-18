function funcA() {
  var a = 1;
  console.log(a);

  function foo() {
    return 2;
  }
  console.log(foo());
}
funcA();

// a its var
// undefined
// we need to replace the order

var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName()); // Aurelio
var test = obj.prop.getFullName(); //
console.log(test); //Aurelio

// i add () to get full name

function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a); //num
console.log(typeof b); // num

// Block 4
function funcC() {
  console.log("1");
}
funcC(); // 1
function funcC() {
  console.log("2");
}
funcC(); //2

// why is it 2 and 2 ?

function funcD1() {
  d = 1;
}
funcD1();
console.log(d); // 1
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e); // no exess to funcD2

// need to fix let d = 1

function funcE() {
  console.log("Value of f in local scope: ", f); // undefined
}
console.log("Value of f in global scope: ", f); // 1
var f = 1;
funcE();
