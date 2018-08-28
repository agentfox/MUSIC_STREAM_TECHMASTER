const mongoose = require('../database/db');

const songsingerSchema = new mongoose.Schema({
    id: String,
    songid: String,
    singerid: String,
});
const songsingers = mongoose.model('songsingers', songsingerSchema); 

module.exports = songsingers;