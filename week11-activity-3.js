let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulgate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

// 1. ADD a new contact using the push() method
contacts.push({
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
});

// 2. UPDATE the phone number for Helen Richards
// Helen Richards is currently at index 2 (the third element)
contacts[2].phone = "0800 2222";

// 3. DELETE the contact for Raja Villarreal from the array.
// Raja Villarreal is currently at index 1
// We use splice(startIndex, deleteCount)
contacts.splice(1, 1);

// 4. Display the first and last contact
const firstContact = contacts[0];
// The last contact is always at index contacts.length - 1
const lastContact = contacts[contacts.length - 1]; 

console.log("--- Final Contact List State ---");
console.log("First Contact:");
console.log(`${firstContact.name} / ${firstContact.phone} / ${firstContact.email}`);

console.log("\nLast Contact:");
console.log(`${lastContact.name} / ${lastContact.phone} / ${lastContact.email}`);
// programmed by danicah