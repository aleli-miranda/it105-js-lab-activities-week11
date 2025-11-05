let books = [
  {
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460
  },
  {
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    pages: 254
  },
  {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352
  }
];

books.push({
  title: "Learning JavaScript Design Patterns",
  author: "Addy Osmani",
  pages: 254
});

console.log("Total number of books:", books.length);

console.log("Book collection:");
for (let book of books) {
  console.log(book.title);
}

let newBooks = books.slice(-2);
console.log("\nCopied last two books:");
for (let book of newBooks) {
  console.log(book.title);
}

books.shift();

console.log("\nAfter removing the first book:");
console.log("Total number of books:", books.length);
for (let book of books) {
  console.log(book.title);
}

let totalPages = 0;
for (let book of books) {
  totalPages += book.pages;
}
console.log("\nTotal pages of remaining books:", totalPages);

//Use the slice command to copy the last two books to the new array.




/*The first book from the collection is lost in unexplained circumstances. 
You have already accepted the loss, so remove it from the array. 
Which method will you use for this purpose? 
Display the length of the array and all the names of the books from the collection in turn.*/





//Display the sum of the pages of all the books from the collection.

