//ARRAY
/*We are setting up our small library of books 
about JavaScript programming. 
We have three books and want to prepare a list of them. 
We will store three pieces information about each book: 
title, author, and number of pages:

Speaking JavaScript, Axel Rauschmayer, 460;
Programming JavaScript Applications, Eric Elliott, 254;
Understanding ECMAScript 6, Nicholas C. Zakas, 352.

Create an array of three objects representing the books. 
Each object must have the following properties: title, author, pages.*/





/* Add a new book to the collection: 
Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. 
Use the appropriate method to do this, 
which will attach the book at the end of the array. 
Display the length of the array and, in turn, all the book names in the collection.*/






//Use the slice command to copy the last two books to the new array.




/*The first book from the collection is lost in unexplained circumstances. 
You have already accepted the loss, so remove it from the array. 
Which method will you use for this purpose? 
Display the length of the array and all the names of the books from the collection in turn.*/





//Display the sum of the pages of all the books from the collection.

//1st Contruction of array with 3 books.
console.log("Instruction 1");

let books = [{
  title: "Speaking JavaScript",
  author: "Axel Rauschmayer",
  num_of_pages: "460"
}, {
  title: "Programming JavaScript Applications",
  author: "Eric Elliott",
  num_of_pages: "254"
}, {
  title: "Understanding ECMAScript 6",
  author: "Nicholas C. Zakas",
  num_of_pages: "352"
}]

console.log("Current list of books inside the array:", books);

//2nd Adding another book in the current list.
console.log("");
console.log("Instruction 2");
console.log("");

books.push({title: "Learning JavaScript Design Patterns", author: "Addy Osmani", num_of_pages: "254"});

console.log("Number of books inside the array:", books.length);

console.log(`Book titles:
${books[0].title}
${books[1].title}
${books[2].title}
${books[3].title}`);

//3rd Slicing last 2 books to the new array
console.log("");
console.log("Instruction 3");
console.log("");

let lbooks = books.slice(2);

console.log("Last two books from the array:", lbooks);

//4th Removing the first book from the 1st list.
console.log("");
console.log("Instruction 4");
console.log("");

console.log("Before removing the first book:", books.length, "books");

books.shift();

console.log("After removing the first book:", books.length, "books");

//5th Display the sum of the pages of all the books from the collection. 
console.log("");
console.log("Instruction 5");
console.log("");

console.log("Total number of pages of all the books:",
  Number(books[0].num_of_pages) +
  Number(books[1].num_of_pages) +
  Number(books[2].num_of_pages)
);

// William Czyron A. Gatdula BSIT 211B