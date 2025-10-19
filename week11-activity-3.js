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


let JS_books = 
[{title: "Speaking JavaScript" , author: "Axel Rauschmayer" , pages: "460" }, 
{title: "Programming JavaScript Applications", author: "Eric Elliott", pages: "254" }, 
{title:"Understanding ECMAScript 6" , author: "Nicholas C. Zakas" , pages: "352"}];
console.log("Original array")
console.log(JS_books);
console.log(" ");
//adding new item
console.log("Adding new item in array");
JS_books.push({title: "Learning JavaScript Design Pattern",author: "Addy Osmani", pages: "254" });
console.log(JS_books);
console.log("Array length: ", JS_books.length);
console.log("Book titles: ");
console.log(JS_books[0].title);
console.log(JS_books[1].title);
console.log(JS_books[2].title);
console.log(JS_books[3].title);
console.log(" ");

//new array
console.log("New list of books");
let new_list = JS_books.slice(2)
console.log(new_list);
console.log(" ");

//removing first item on the list
console.log("Removing first item")
JS_books.shift();
console.log(JS_books) 
console.log("Array length: ", JS_books.length);
console.log("Book titles: "); 
console.log(JS_books[0].title);
console.log(JS_books[1].title);
console.log(JS_books[2].title);
console.log(" "); 

//sum of pages
console.log("Total pages of all the books: ",
  Number(JS_books[0].pages) + Number(JS_books[1].pages) + Number(JS_books[2].pages))


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

