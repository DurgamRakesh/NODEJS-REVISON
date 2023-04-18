// const mongoose = require('mongoose');
// const user = mongoose.Schema({
//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })

// const model = mongoose.model('dataofuser',user);
// module.exports = model

// const mongoose = require('mongoose');

// const UserData = mongoose.Schema({
//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })

// const userSchema = mongoose.model('dataofuser', UserData);
// module.exports = userSchema;

// const mongoose = require('mongoose');

// const user = mongoose.Schema({
//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })

// const usermodel = mongoose.model('dataofuser',user);

// module.exports = usermodel;

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const model = mongoose.model('dataofuser', userSchema);

module.exports = model;