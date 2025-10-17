"use strict";
//Objects
/*
Question 1: Create an object that describes a train ticket and 
store it in the ticket variable. The object must have three fields:

-starting station (key name from, give the name of the nearest station in your area as a value);
-end station (key name to, give any other station within 100km as a value);
-the price of the ticket (key name price, give the amount you would like to pay for this ticket as a value).

*/

let ticket = {
  from: "New Olivares UV Terminal",
  to: "Rephil - Buho, Silang",
  price: 15.00
};

/*Question 2: 
Declare an empty object and save it to a person variable. 
Using dot notation, add the name and surname fields to the 
The object must be created using curly brackets, 
in which all created fields will be listed immediately. 
Then display the values of all fields of the ticket on the console.
*/
let person = {
  name: "Allen",
  surname: "Zamora"
};

console.log("TICKET DETAILS:");
console.log(`From: ${ticket.from}`);
console.log(`To: ${ticket.to}`);
console.log(`Price: P${ticket.price}`);
console.log("-------------------");
console.log("PERSON DETAILS:");
console.log(`Name: ${person.name}`);
console.log(`Surname: ${person.surname}`);
