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
// 1. Add a new contact
contacts.push({
  name: "Maisie Haley",
  phone: "0913 531 3030",
  email: "risus.Quisque@urna.ca"
});

// 2. Update Helen Richards' phone number
for (let contact of contacts) {
  if (contact.name === "Helen Richards") {
    contact.phone = "0800 2222";
    break;
  }
}

// 3. Delete Raja Villarreal
contacts = contacts.filter(contact => contact.name !== "Raja Villarreal");

// 4. Display the first and last contact
let firstContact = contacts[0];
let lastContact = contacts[contacts.length - 1];

console.log(`${firstContact.name} / ${firstContact.phone} / ${firstContact.email}`);
console.log(`${lastContact.name} / ${lastContact.phone} / ${lastContact.email}`);
