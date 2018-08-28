const mongoose = require('../database/db');

const singerSchema = new mongoose.Schema({
    id: String,
    name: String,
    albumid: String,
    urlimg: String,
});
const singers = mongoose.model('singers', singerSchema); 

module.exports = singers;