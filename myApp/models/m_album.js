const mongoose = require('../database/db');

const albumSchema = new mongoose.Schema({
    id: String,
    name: String,
    urlimg: String,
    description: String,
});
const albums = mongoose.model('albums', albumSchema); 

module.exports = albums;