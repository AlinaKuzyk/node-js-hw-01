const fs = require("fs").promises;
const path = require("path");
const uniqid = require("uniqid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  if (!contact) {
    return null;
  }
  return contact;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const contactToRemove = contacts.filter(
    (contact) => contact.id !== contactId
  );
  if (!contactToRemove) {
    return null;
  }
  await fs.writeFile(contactsPath, JSON.stringify(contactToRemove));
  return contactToRemove;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
   const newContact = { name, email, phone, id: uniqid() };
    if (!newContact) {
      return null;
    }
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
}

module.exports = { listContacts, getContactById, addContact, removeContact };
