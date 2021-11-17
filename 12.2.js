const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

//    1. Implement the following getCandy function:
// The function should return the candy element with the specified id.

function getCandy(objArr, id) {
  objArr.forEach((candy) => {
    if (candy.id === id) {
      console.log(candy);
    }
  });
}

// getCandy(candyStore.candies, "5hd7y");

// 2. Implement the following getPrice function:
// The function should return the price (number) of the candy with the specified
// id

function getPrice(candyStore, id) {
  return (goodCandy = candyStore.find((candy) => candy.id === id));
}

// console.log(getPrice(candyStore.candies, "as12f"));

// 3. Implement the following addCandy function:
// The function should add a new candy to the candy list in candyStore with a
// default amount of 1. The function will not return anything.

function addCandy(candyStore, id, name, price) {
  return candyStore.candies.push({
    id: id,
    name: name,
    price: price,
    amount: 1,
  });
}

console.log(addCandy(candyStore, "nutela", "rt565", 7));

console.log(candyStore.candies);

// 4. Implement the following buy function: The function should add the candy
// price to the cashRegister, and decrease the amount property of the relevant
// candy.

function buy(candyStore, id) {
  const chosenCandy = candyStore.candies.find((candy) => candy.id === id);
  chosenCandy.amount--;
  return (candyStore.cashRegister += chosenCandy.price);
}

console.log(buy(candyStore, "5hd7y"));

console.log(candyStore.candies);
