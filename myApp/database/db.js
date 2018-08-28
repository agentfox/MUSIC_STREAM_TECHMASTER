const mongoose = require('mongoose');

mongoose.connect('mongodb://techmaster_music:techmaster123@ds131932.mlab.com:31932/heroku_xncl9mdz',{ useNewUrlParser: true });

module.exports = mongoose;