const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: {type: String, required: true},
    genre: {type: String, required: true},
});

const NHIE = mongoose.model('NHIE',questionSchema);

module.exports = NHIE;