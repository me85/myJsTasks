// every year that is divisible by 4 is a leap year except for the ones that are
// also divisible by 100, unless it is divisible by 400. Example: 2012 is a leap
// year 2100 is not But 2400 is.

function leapYear(year) {
  if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
    return console.log("This is  a leap year.");
  } else if (year % 4 == 0 && year % 100 == 0) {
    return console.log("It is not leap year");
  } else if (year % 4 == 0) {
    return console.log("It is indeed leap year");
  }
}

leapYear(4);
