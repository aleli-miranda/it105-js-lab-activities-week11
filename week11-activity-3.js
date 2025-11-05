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

"use strict";
let books = [{
title: "Speaking JavaScript",
author: "Axel Rauschmayer",
pages: "460"
},{
title: "Programming JavaScript Applications",
author: "Eric Elliott",
pages: "254"
},{
title: "Understanding ECMAScript 6",
author: "Nicholas C. Zakas",
pages: "352"
}
]

books.push({
  title: "JavaScript Design Patterns",
  author: "Addy Osmani",
  pages: "254"
});

let last = books.slice(2,4);

books.shift();
console.log("Remaining Books: ", books.length)
console.log(books);

console.log("The Sum of all pages is: ", Number(books[0].pages) + Number(books[1].pages) + Number(books[2].pages) )