function shape(n) {
  for (let index = 1; index <= n; index++) {
    // const element = array[index];
    str = "";

    for (let j = 1; j <= n; j++) {
      str += j <= index ? "#" : " ";
    }
  }
  console.log(str);
}

shape(3);

// not working
