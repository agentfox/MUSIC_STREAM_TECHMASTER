const mongoose = require('../database/db');

const genreSchema = new mongoose.Schema({
    id: String,
    name: String,
});
const genres = mongoose.model('genres', genreSchema); 

module.exports = genres;