const mongoose = require('../database/db');

const songalbumSchema = new mongoose.Schema({
    id: String,
    albumid: String,
    songid: String
});
const song_albums = mongoose.model('song_albums', songalbumSchema); 

module.exports = song_albums;