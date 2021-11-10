let myBook = {
  aouter: "tolkin",
  bookName: "c for devlopers",
  numOfPages: 100,
  orderNumber: 2384848,
  year: "1987",
  section: "kids",
};

let myBookDiscripation = (book) => {
  let discripation = `The book ${myBook.bookName} was written by ${myBook.aouter} in
the year ${myBook.year}`;

  return discripation;
};

console.log(myBookDiscripation(myBook));
