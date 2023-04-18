const mongoose = require('mongoose');

const url = 'mongodb://0.0.0.0:27017';

const connection = async () => {
    await mongoose.connect(url);
    console.log('database connected....');
}

module.exports = connection;