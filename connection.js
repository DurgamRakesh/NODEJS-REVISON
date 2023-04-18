// const mongoose = require('mongoose');

// mongoose.set('strictQuery',true);

// const connection = mongoose.connect('mongodb://0.0.0.0:27017');
// module.exports = connection;

// const mongoose = require('mongoose');
// // const url = 'mongodb://0.0.0.0:27017'
// const url1 = 'mongodb+srv://durgamrakesh11:rakesh12345@cluster0.2487rgr.mongodb.net/test'
// const connection = async () => {
//     await mongoose.connect(url1);
//     console.log('connected...');
// }

// module.exports = connection;

// const mongoose = require('mongoose');

// const url = 'mongodb+srv://durgamrakesh11:rakesh12345@cluster0.2487rgr.mongodb.net/test'
// const connection = async () => {
//     await mongoose.connect(url);
//     console.log('db connected...');
// }

// module.exports = connection;

const mongoose = require('mongoose');

const url = 'mongodb+srv://durgamrakesh11:rakesh12345@cluster0.2487rgr.mongodb.net/test'
const connection = async () => {
   await mongoose.connect(url);
   console.log('mongoose connected...')

}

module.exports = connection;
