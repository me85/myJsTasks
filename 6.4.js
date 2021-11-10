const populations = [1000, 2000, 3000, 4000];

let populationPercentages = (populationArray) => {
  const percentages = [];

  for (let index = 0; index < populationArray.length; index++) {
    const population = populationArray[index];

    var result = (population / 7900) * 100;
    percentages.push(result);
  }
  return percentages;
};

console.log(populationPercentages(populations));
