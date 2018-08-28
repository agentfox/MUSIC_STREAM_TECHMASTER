const mongoose = require('../database/db');

const songsSchema = new mongoose.Schema({
    id: String,
    name: String,
    url: String,
    userid: String,
    lyrics: String,
    likes: Number,
    views: Number,
    genreid: String
});
const songs = mongoose.model('songs', songsSchema); 

module.exports = songs;