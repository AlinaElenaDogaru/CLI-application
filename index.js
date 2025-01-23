const contacts = require('./contacts');
const argv = require('yargs').argv;



async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
  const contactsList = await contacts.listContacts();
  console.log(contactsList);
  break;

     case "get":
  const contact = await contacts.getContactById(id);
  console.log(contact ? contact : `Contact with ID ${id} not found.`);
  break;


    case "add":
      await contacts.addContact(name, email, phone);
      break;

    case "remove":
      await contacts.removeContact(id);
      break;

    default:
      console.warn("Unknown action type!");
  }
}


invokeAction(argv);
