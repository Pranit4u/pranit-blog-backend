const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    content: {type: String, required: true},
});

const Message = mongoose.model('Message',messageSchema);

module.exports = Message;