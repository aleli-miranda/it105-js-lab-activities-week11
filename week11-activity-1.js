let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

//INSTRUCTIONS
/*
1.  ADD a new contact using the appropriate array method. 
The new contact is: Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.

2. UPDATE the phone number for Helen Richards to: 0800 2222.

3.  DELETE the contact for Raja Villarreal from the array.

4.  Display the first and last contact, 
again in the format: name / phone / email. 
Use the length property of the array to determine the index of the last element. 
Remember that the array elements are indexed starting at 0
*/

// #1 ADD a new contact.
console.log("Problem #1");

let contactAdd = contacts.push({name: "Maisie Haley", phone: "0913 531 3030", email: "risus.Quisque@urna.ca."});

console.log(contacts);

// #2 UPDATE the phone number for Helen Richards to: 0800 2222.

console.log("Problem #2");

contacts[2].phone = "0800 2222";

console.log(contacts);

// #3 DELETE the contact for Raja Villarreal from the array.
console.log("Problem #3");

contacts.splice(1, 1);

console.log(contacts);

// #4 Display the first and last contact
console.log("Problem #4");

let first = contacts[0];
let last = contacts[contacts.length - 1];

console.log(`First: ${first.name} / ${first.phone} / ${first.email}`);
console.log(`Last: ${last.name} / ${last.phone} / ${last.email}`);

// William Czyron A. Gatdula BSIT 211B