const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

// List all contacts
async function listContacts() {
  const data = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(data);
}


// Get a contact by ID
async function getContactById(contactId) {
  const contacts = await listContacts();
  return contacts.find(contact => contact.id === String(contactId)) || null;
}


// Remove a contact by ID
async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);

    // Convertim contactId în string
    const index = contacts.findIndex((contact) => contact.id === String(contactId));

    if (index === -1) {
      console.log(`Contact with ID ${contactId} does not exist.`);
      return;
    }

    const updatedContacts = contacts.filter((contact) => contact.id !== String(contactId));

    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
    console.log(`Contact with ID ${contactId} has been successfully removed.`);
  } catch (error) {
    console.error("Error while removing contact:", error.message);
  }
}



// Add a new contact
async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: String(contacts.length + 1), 
      name,
      email,
      phone,
    };

    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    console.log("Contact added successfully:", newContact);
    return newContact; 
  } catch (error) {
    console.error("Error while adding contact:", error.message);
    throw error; 
  }
}


module.exports = { listContacts, getContactById, removeContact, addContact };
