const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pictureSchema = new Schema({
    type: {type: String, required: true},
    src: {type: String, required: true},
    altText: {type: String, required: true},
    caption: {type: String, required: true}
});

const Picture = mongoose.model('Picture',pictureSchema);

module.exports = Picture;