const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

// 1. Create a function that returns all the names from the array.

// function names(arr) {
//   data.forEach(function (dataEl) {
//     console.log(dataEl.name);
//   });
// }
// names(data);

// 2. Create a function that returns all the objects that are born before 1990.

function bornBefore(arr) {
  arr.forEach(function (dataEl) {
    let birthday = dataEl.birthday;
    birthday = birthday.slice(-4);

    if (birthday < 1990) {
      console.log(dataEl);
    }
  });
}
bornBefore(data);

// 3. Create a function that returns an object of all the different foods from all
// the objects as the key and the number of times that food is present in all the
// objects as the value.
function foodWeLove() {}
