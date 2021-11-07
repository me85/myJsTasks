// . Name of the current day e.g. Sunday
// 2. Current day of the month e.g. 31
// 3. Current month e.g January
// 5. Current Year e.g 2021

// `Today is Sunday the 31 of January, 2021’

const event1 = new Date();

console.log(event1.toString());
// expected output: Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)

console.log(event1.toDateString());
// expected output: Wed Jul 28 1993

let todayDate = event1.toDateString();

// console.log(todayDate[0]);

let nameOfDay = todayDate.slice(0, 3);
let datOfMonth = todayDate.slice(9, 11);
let month = todayDate.slice(4, 7);
let year = todayDate.slice(11, 17);

let myStringDate = `Today is ${nameOfDay} the ${datOfMonth} of ${month}, ${year}`;

console.log(myStringDate);
