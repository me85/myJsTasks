// John and Mike both play basketball in different teams. In the latest 3 games,
// John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94
// and 123 p

function ArrayAvg(myArray) {
  var i = 0,
    summ = 0,
    ArrayLen = myArray.length;
  while (i < ArrayLen) {
    summ = summ + myArray[i];
    i++;
  }
  return summ / ArrayLen;
}

var myArray1 = [116, 94, 923];
var myArray2 = [116, 94, 923];
var myArray3 = [116, 94, 12223];

var jhonescore = ArrayAvg(myArray1);
var mikescore = ArrayAvg(myArray2);
var marryescore = ArrayAvg(myArray3);

if (jhonescore > mikescore && jhonescore > marryescore) {
  return console.log(`johne win score is: ${jhonescore}`);
} else if (jhonescore == mikescore && jhonescore == marryescore) {
  return console.log(` win score is: ${jhonescore}  3 with same score -there is no winner`);
} else if (mikescore > jhonescore && mikescore > marryescore) {
  return console.log(`mike win score is: ${mikescore}`);
} else if (marryescore > jhonescore && marryescore > mikescore) {
  return console.log(`merriy win score is: ${marryescore}`);
} else {
  return console.log(" two with the same score - so there is no winner");
}
