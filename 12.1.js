var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function BookNotTaken(arr) {
  arr.forEach((element) => {
    if (element.readingStatus === true) {
      console.log(element);
    }
  });
}

console.log(BookNotTaken(library));
