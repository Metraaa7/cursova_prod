const mongoose = require("mongoose");

const Contacts = new mongoose.Schema({
    name: String,
    number: String,
    address: String
});

module.exports = mongoose.model("Contacts", Contacts);
// const mongoose = require('mongoose');

// const ContactsSchema = mongoose.Schema({
//     name: {
//         type: String
//     },
//     number: {
//         type: String
//     },
//     address: {
//         type: String
//     },
//     created_at: {
//         type: String
//     }

// });

// const Contacts = mongoose.model('Contacts', ContactsSchema);
// module.exports = Contacts;