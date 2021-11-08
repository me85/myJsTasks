function percentageOfWorld1(population) {
  var result = (population / 7900) * 100;

  return result;
}

let israel = percentageOfWorld1(9);
let china = percentageOfWorld1(1441);

let usa = percentageOfWorld1(690);

console.log(israel, china, usa);

let percentageOfWorld2 = (population) => {
  var result = (population / 7900) * 100;

  return result;
};

let israel2 = percentageOfWorld2(9);
let china2 = percentageOfWorld2(1441);

let usa2 = percentageOfWorld2(690);

console.log(israel2, china2, usa2);
