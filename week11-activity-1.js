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

console.log("--- Initial Array of Contacts ---");
console.log(contacts);

// --- 1. ADD a new contact using push() ---
const newContact = {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
};
// Adds the new contact object to the end of the array
contacts.push(newContact);

console.log("\n--- After Adding Maisie Haley ---");
console.log(contacts);

// ------------------------------------------

// --- 2. UPDATE the phone number for Helen Richards ---
// Find the index of the contact with the name "Helen Richards"
const helenIndex = contacts.findIndex(contact => contact.name === "Helen Richards");

if (helenIndex !== -1) {
    // Update the 'phone' property of the found object
    contacts[helenIndex].phone = "0800 2222";
}

console.log("\n--- After Updating Helen Richards' Phone ---");
console.log(contacts);

// ------------------------------------------

// --- 3. DELETE the contact for Raja Villarreal using splice() ---
// Find the index of the contact with the name "Raja Villarreal"
const rajaIndex = contacts.findIndex(contact => contact.name === "Raja Villarreal");

if (rajaIndex !== -1) {
    // Start at rajaIndex, remove 1 element
    contacts.splice(rajaIndex, 1);
}

console.log("\n--- After Deleting Raja Villarreal ---");
console.log(contacts);

// ------------------------------------------

// --- 4. Display the first and last contact ---

// First contact is always at index 0
const firstContact = contacts[0];

// Last contact is at index contacts.length - 1
const lastContact = contacts[contacts.length - 1];

console.log("\n--- Final Display (First and Last Contact) ---");

// Helper function to format the output as "name / phone / email"
const formatContact = (contact) => {
    return `${contact.name} / ${contact.phone} / ${contact.email}`;
};

console.log("First Contact:");
console.log(formatContact(firstContact));

console.log("Last Contact:");
console.log(formatContact(lastContact));
// programmed by danicah