Contact Management CLI Application
📖 Description
This modern Command Line Interface (CLI) application allows you to manage a list of contacts stored in a JSON file. With this tool, you can perform essential operations such as listing all contacts, retrieving a contact by ID, adding new contacts, and removing existing ones. The application is built using Node.js and utilizes asynchronous operations for seamless file handling.

⚙️ Features
List Contacts: View all saved contacts in the database.
Get Contact by ID: Retrieve a specific contact using its unique ID.
Add Contact: Add a new contact by providing a name, email, and phone number.
Remove Contact: Remove a contact from the list using its ID.

📜 Usage
Use the following commands to interact with the application:

1. List All Contacts

https://ibb.co/tK6ynffnode
index.js --action=list
Output: Displays all contacts stored in the database.

2. Get a Contact by ID
   https://ibb.co/s1C2mFt
   node index.js --action=get --id=<contact_id>
   Output: Displays details of the contact with the specified ID.
   Example:

node index.js --action=get --id=1

3. Add a New Contact
   https://ibb.co/cKq2xvB
   node index.js --action=add --name=<name> --email=<email> --phone=<phone>
   Example:

node index.js --action=add --name="Charlie" --email="charlie@example.com" --phone="555-678-910"
Output:

Adds the new contact to the database.
Returns a success message with the added contact's details.

4. Remove a Contact by ID
   https://ibb.co/dWnZDV6
   node index.js --action=remove --id=<contact_id>
   Example:

node index.js --action=remove --id=1
Output:

Removes the contact with the specified ID from the database.
Returns a success or error message based on the operation's outcome.

🛠️ Project Structure

📂 project-root
┣ 📂 db
┃ ┗ 📄 contacts.json # Contact data
┣ 📄 contacts.js # Core logic for managing contacts
┣ 📄 index.js # CLI interaction logic
┗ 📄 package.json # Project dependencies and metadata

📂 Example Scenarios

1. Listing Contacts:

node index.js --action=list
Output:

[
{ "id": "1", "name": "Alice", "email": "alice@example.com", "phone": "123-456-7890" },
{ "id": "2", "name": "Bob", "email": "bob@example.com", "phone": "987-654-3210" }
] 2. Adding a New Contact:

node index.js --action=add --name="Charlie" --email="charlie@example.com" --phone="555-678-910"
Output:

Contact added successfully:
{ id: "3", name: "Charlie", email: "charlie@example.com", phone: "555-678-910" } 3. Removing a Contact:

node index.js --action=remove --id=2
Output:

Contact with ID 2 has been successfully removed.

4. Fetching a Contact by ID:

node index.js --action=get --id=1
Output:

{ id: "1", name: "Alice", email: "alice@example.com", phone: "123-456-7890" }

💡 Tips
Always ensure contacts.json is properly formatted.
Run commands in the root directory of the project.
For debugging, use console.log inside the functions.
🔗 License
This project is open-source and available under the MIT License.

Enjoy managing your contacts! 😊
