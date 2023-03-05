const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, "utf-8");
    return contacts;
  } catch (error) {
    console.log(error);
  }
}
listContacts();
// async function getContactById(contactId) {
//   const contacts = await listContacts();
//   const contact = contacts.find((contact) => contact.id === contactId);
//   return contact;
// }
// getContactById();

// async function removeContact(contactId) {
//   const contacts = await listContacts();
//   const contactToRemove = contacts.filter(
//     (contact) => contact.id !== contactId
//   );
//   await fs.writeFile(contactsPath, JSON.stringify(contactToRemove));
//   return contactToRemove;
// }

// async function addContact(name, email, phone) {
//   const contacts = await listContacts();
//   const newContact = { name, email, phone };
//   contacts.push(newContact);
//   await fs.writeFile(contactsPath, JSON.stringify(newContact));
//   return newContact;
// }

// module.exports = { listContacts, getContactById, removeContact, addContact };
