const food = ["Pasta", "Noodle", "Meat", "Cucumber"];
const food1 = ["Fries", "Pizza", "Olives", "Hamburgers"];

function sameFood(food, food1) {
  let shereFood = [];

  for (let index = 0; index < food.length; index++) {
    const elementFood = food[index];

    for (let index = 0; index < food1.length; index++) {
      if (elementFood === food1[index]) {
        shereFood.push(elementFood);
      }
    }
    if (shereFood.length === 0) {
      return "none";
    }
  }
  return shereFood;
}

console.log(sameFood(food, food1));
