const listOfNeighbours = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]];

for (let index = 0; index < listOfNeighbours.length; index++) {
  const nestArr = listOfNeighbours[index];

  for (let index = 0; index < nestArr.length; index++) {
    const element = nestArr[index];
    console.log(`Neighbour:  ${element}`);
  }
}
