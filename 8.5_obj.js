let obj = {
  name: "meital",
  age: 36,
  c: 3,
};

function swapped(obj) {
  const swapped = Object.fromEntries(Object.entries(obj).map(([name, age]) => [age, name]));
  console.log(swapped);
}

swapped(obj);
