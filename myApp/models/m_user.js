const mongoose = require('../database/db');

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    pw: String
});
const users = mongoose.model('users', userSchema); 

module.exports = users;