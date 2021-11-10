let bookUtils = {
  setNewEdition: function (book, editionYear) {
    return (book.latestEdition = editionYear);
  },

  getFirstPublished: function (firstBook, secBook) {
    return firstBook.year > secBook.year ? firstBook.year : secBook.year;
  },

  setLanguage: function (book, language) {
    return (book.language = language);
  },
  setTranslation: function (book, translator, language) {
    book.translation = `${translator}/${language}`;
  },
  setPublisher: function (book, name, location) {
    book.publisher = `${name}/${location}`;
  },
  isSamePublisher: function (bookOne, bookTow) {
    return bookOne.publisher === bookTow.publisher ? true : false;
  },
};
let book1 = {
  name: "good parts",
  author: "dan kelman",
  year: "2014",
};
let book2 = {
  name: "reason for life",
  author: "gilad cheon",
  year: "2009",
};

// set c(x) {
//     this.a = x / 2;
//   }

// console.log(bookUtils.setNewEdition(book2, "2333"));
// console.log(bookUtils.setLanguage(book2, "german"));
// console.log(book2);
// console.log(bookUtils.isSamePublisher(book2, book1));
