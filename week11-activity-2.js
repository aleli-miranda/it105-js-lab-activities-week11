// ARRAY OF OBJECTS EXERCISES

/*
Create an array of three objects representing the books. 
Each object must have the following properties: title, author, pages.
*/

let library = [
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

console.log("--- Initial Library Created ---");
console.log(`Current number of books: ${library.length}`);

/*
Add a new book to the collection: 
Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. 
Use the appropriate method to do this, which will attach the book at the end of the array. 
Display the length of the array and, in turn, all the book names in the collection.
*/
const newBook = {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
};

// Use the push() method to add the new book to the end of the array.
library.push(newBook);

console.log("\n--- Book Added (Push) ---");
console.log(`New number of books: ${library.length}`);
console.log("All book titles in the collection:");
library.forEach(book => console.log(`- ${book.title}`));


//Use the slice command to copy the last two books to the new array.
// To get the last two books, we start the slice 2 elements from the end (library.length - 2).
const lastTwoBooks = library.slice(library.length - 2);

console.log("\n--- Last Two Books (Slice) ---");
console.log("Copied books to 'lastTwoBooks' array:");
lastTwoBooks.forEach(book => console.log(`- ${book.title}`));


/*
The first book from the collection is lost in unexplained circumstances. 
You have already accepted the loss, so remove it from the array. 
Which method will you use for this purpose? 
Display the length of the array and all the names of the books from the collection in turn.
*/
// Use the shift() method to remove the first element from the array.
library.shift();

console.log("\n--- First Book Removed (Shift) ---");
console.log(`New number of books: ${library.length}`);
console.log("All book titles remaining in the collection:");
library.forEach(book => console.log(`- ${book.title}`));


//Display the sum of the pages of all the books from the collection.
let totalPages = 0;

// Use the reduce() method to efficiently sum the pages of all books.
// Alternatively, we could use a forEach loop:
/*
library.forEach(book => {
    totalPages += book.pages;
});
*/

// Using reduce:
totalPages = library.reduce((sum, book) => sum + book.pages, 0);

console.log("\n--- Total Pages Sum ---");
console.log(`The sum of the pages of all remaining books is: ${totalPages}`);
//programmed by danicah