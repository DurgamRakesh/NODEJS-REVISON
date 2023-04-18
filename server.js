//create server useing http and routing

// const http = require('http');

// const PORT = 9000;
// const server = http.createServer((req,res) =>{
//     const path = req.url;

//     if(path === '/'){
//         res.write(`<h1>home page<h1/>`)
//         res.end()
//     }
//     else if(path === '/student'){
//         res.write(`<h1>student page<h1/>`)
//         res.end()
//     }
//     else if(path === '/login'){
//         res.write(`<h1>Login page<h1/>`)
//         res.end()
//     }
//     else if(path === '/register'){
//         res.write(`<h1>Register page<h1/>`)
//         res.end()
//     }
//     else{
//         res.write('<h1>no page found error<h1/>')
//         res.end()
//     }
// })

// server.listen(PORT, () => {
//     console.log(`server is running on ${PORT}`)
// })

//create express server

// const express = require('express');

// const app = express();
// const PORT = 9000;
// app.get('/', (req, res) => {
//     res.send('<h1>Home Page<h1/>')
// })

// app.get('/login', (req, res) => {
//     res.send('<h1>Login Page<h1/>')
// })

// app.get('/register', (req, res) => {
//     res.send('<h1>Register Page<h1/>')
// })

// app.get('/student', (req, res) => {
//     res.send('<h1>Student Page<h1/>')
// })

// app.listen(PORT, () =>{
//     console.log(`express server is running on ${PORT}`);
// })

//import data from other file useing http

// const http = require('http');
// const data = require('./data');
// const server = http.createServer((req, res) => {
//     res.write('hello');
//     res.end();
// })
// server.listen(9000, () => {
//     console.log('9000');
//     console.log(data.list());
// })

// const http = require('http');
// const sum = require('./data')
// const server = http.createServer((req, res) => {
//     res.write('hello');
//     res.end();
// })
// server.listen(9000, () => {
//     console.log('9000');
//     console.log('sum is',sum.sum(4,5));
// })

//send data in json format

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.json([
//         {name:"rakesh",id:1,age:23},{name:"dur",id:2,age:24},{name:"vis",id:3,age:25}
//     ])
// })

// app.listen(9000, () => {
//     console.log('9000');
// })

//send data from postman

// const express = require('express');
// const app = express();
// app.use(express.json());

// app.get('/', (req, res) => {
//     const user = req.body;
//     res.send(user)
//     console.log(user);
// })

// app.listen(9000, () => {
//     console.log('9000');
// })

//creating hashpassword and compating to previous data

// const express = require('express');
// const bcrypt = require('bcrypt');
// const bodyparser = require('body-parser');

// const app = express();
// app.use(bodyparser.json());
// let arr = []
// app.post('/register', async (req, res) =>{
//     const user = req.body;
//     const hashpassword = await bcrypt.hash(user.password,10);
//     let obj = {
//         name:user.name,
//         email:user.email,
//         password:hashpassword
//     }
//     arr.push(obj);
//     res.send(arr)

// })

// app.post('/login', async (req, res) =>{
//     await arr.forEach((eachItem) => {
//         if(eachItem.name === req.body.name){
//             bcrypt.compare(req.body.password, eachItem.password, (err,valid) => {
//                 if(err){
//                     console.log('error')
//                     res.send('error')
//                 }
//                 if(valid){
//                     res.send('user is valid')
//                     console.log('user is valid')
//                 }
//                 else{
//                     res.send('invalid credentials')
//                     console.log('invalid credentials');
//                 }
//             })
//         }
//     })
// })

// app.listen(9000, () => {
//     console.log('9000');
// })

//jwt token creating and verifyting

// const express = require('express');
// const jwt = require('jsonwebtoken');
// const bodyparser = require('body-parser');

// const app = express();
// app.use(bodyparser.json());

// app.get('/', (req, res) => {
//     res.send('hello');
// })
// const middle = (req, res, next) => {
//     const token = req.headers['authorization'];
//     const result = token.split(' ')[1];
//     req.token = result;
//     next();
// }
// app.post('/login', (req, res) => {
//     const user = req.body;

//     jwt.sign({user}, 'rakesh', (err, token) => {
//         if(err){
//             console.log(err);
//             res.send('error')
//         }
//         console.log(token);
//         res.send({
//             token
//         })
//     })
// })

// app.post('/fr', middle, (req, res) => {
//     jwt.verify(req.token, 'rakesh', (err, token) => {
//         if(err){
//             console.log(err);
//             res.send('error')
//         }
//         console.log(token);
//         res.send({
//             token
//         })
//     })
// })
// app.listen(9000, () => {
//     console.log('9000');
// })

//importing route and using middleware in routing file

// const express = require('express');
// const bodyparser = require('body-parser');
// const router = require('./route');
// const app = express();
// app.use(bodyparser.json())
// app.use(router)

// app.listen(9000, () => {
//     console.log('9000');
// })


// const express = require('express');
// const app = express();
// app.use(express.json())
// const m = (req, res, next) => {
//     const apikey = '1234'

//     if(req.query.api_key && (req.query.api_key === apikey)){
//         next();
//     }
//     else{
//         res.json({
//             "msg":'no data'
//         })
//     }
// }
// app.use(m);
// app.get('/login', (req, res) => {
//     res.json([
//         {
//             "id":"1",
//             "name":'rakesh'
//         },
//         {
//             "id":"2",
//             "name":'rakesh2'
//         },
//         {
//             "id":"3",
//             "name":'rakesh3'
//         }
//     ])
// })
// app.get('/register', (req, res) => {
//     res.send('register page')
// })
// app.listen(9000, () => {
//     console.log('9000');
// })



//------------------------------------------------------------------------------------------------------

// const http = require('http');

// const server = http.createServer((req, res) => {
//     const path = req.url;
//     if(path === '/'){
//         res.write('<h1>home page<h1/>')
//         res.end();
//     }
//     else if(path === '/register'){
//         res.write('<h1>register page<h1/>')
//         res.end();
//     }
//     else if(path === '/login'){
//         res.write('<h1>login page<h1/>')
//         res.end();
//     }
//     else{
//         res.write('<h1>error<h1/>')
//         res.end(); 
//     }
// })

// server.listen(9000, () => {
//     console.log('9000');
// })


// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>Home Page</h1>')
// })
// app.get('/register', (req, res) => {
//     res.send('<h1>Register Page</h1>')
// })
// app.get('/login', (req, res) => {
//     res.send('<h1>Login Page</h1>')
// })



// app.listen(9000, () => {
//     console.log('e 9000');
// })

// const express = require('express');
// // const data = require('./data')
// const {sum} = require('./data')
// const app = express();
// app.get('/', (req, res) => {
//     res.send(data.data())
// })
// app.listen(9000, () => {
//     console.log('9000');
//     // console.log(data.data());
//     console.log("sum:",sum(4,5));
// })

// const http = require('http');
// // const newdata = require('./data')
// const {sum} = require('./data')

// const server = http.createServer((req, res) => {
//     res.write('home')
//     res.end()
// })
// server.listen(9000, () => {
//     console.log('9000');
//     // console.log(newdata.data());
//     console.log("sum :",sum(4,5));
// })

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.json([
//         {name:"rakesh",age:23,id:5882},{name:"durgam",age:24,id:100},{name:"vishnu",age:25,id:101}
//     ])
// })
// app.listen(9000, () => {
//     console.log('9000');
// })


// const express = require('express');
// const bcrypt = require('bcrypt');
// const bodyparser = require('body-parser');
// const app = express();
// app.use(bodyparser.json());

// app.get('/', (req, res) => {
//     res.send('home page')
// })

// let arr = [];
// const saltRounds = 10;

// app.post('/register', async (req, res) => {
//     const user = req.body;
//     const hasspassword = await bcrypt.hash(user.password, saltRounds);
//     const newdata = {
//         name:user.name,
//         email:user.email,
//         password:hasspassword,
//     }

//     arr.push(newdata);
//     res.send(arr);

// })

// app.post('/login', async (req, res) => {
    
//   await  arr.forEach((eachData) => {
//         if(eachData.name === req.body.name){
//             bcrypt.compare(req.body.password, eachData.password, (err, valid) => {
//                 if(err){
//                     res.send(err)
//                     console.log('error');
//                 }
//                 if(valid){
//                     res.json({
//                         message:"user is valid!!!"
//                     })   
//                 }
//                 else{
//                     res.json({
//                         message:"invalid credentials!!!"
//                     }) 
//                 }
//             })
//         }
//     })

// })

// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const jwt = require('jsonwebtoken');
// const bodyparser = require('body-parser');

// const app = express();
// app.use(bodyparser.json());

// app.get('/', (req, res) =>{
//     res.send('hello')
// })

// const secretKey = 'rakjajejesh';

// const newmiddle = (req, res, next) => {
//     const token = req.headers['authorization'];
//     const result = token.split(' ')[1];
//     req.token = result;
//     next()
// }
// app.post('/register', (req, res) =>{
//     const user = req.body;
//     jwt.sign({user}, secretKey, (err, token) => {
//         if(err){
//             res.send(err);
//             console.log('error');
//         }
//         console.log("token :",token);
//         res.send({
//             token
//         })
//     })
// })

// app.post('/login', newmiddle, (req, res) =>{

//     jwt.verify(req.token, secretKey, (err, token) => {
//         if(err){
//             res.send(err);
//             console.log('error');
//         }
//         console.log("token :",token);
//         res.send({
//             token
//         })
//     })
// })

// app.listen(9000, () => {
//     console.log('9000');
// })


// const express = require('express');
// const jwt = require('jsonwebtoken');
// const bodyparser = require('body-parser');

// const app = express();
// app.use(bodyparser.json());

// app.get('/', (req, res) =>{
//     res.send('hello')
// })

// const middle = (req, res, next) => {
//     const api = '1234';
//     if((req.query.api_key) &&  req.query.api_key === api){
//         next();
//     }
//     else{
//         res.json({
//             msg:"error"
//         })
//     }
// }
// app.get('/login',middle, (req, res) =>{
//     res.json([
//         {name:"rakesh",age:23,id:5882},{name:"durgam",age:24,id:100},{name:"vishnu",age:25,id:101}
//     ])
// })

// app.post('/register', (req, res) =>{
//     res.send('register page')
// })

// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const nodemailer = require('nodemailer');

// const app = express();

// // const transporter = nodemailer.createTransport(
// //     {
// //         host:"smtp.gmail.com",
// //         port:597,
// //         secure:false,
// //         command: 'CONN',
// //         auth:{
// //             user:'durgamrakesh11@gmail.com',
// //             pass:"Rakesh985@5882"
// //         }
// //     }
// // )


// const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'jonatan.mayert46@ethereal.email',
//         pass: 'WheKEGMmtT6KnVbBjA'
//     }
// });


// var options = {
//     from:"jonatan.mayert46@ethereal.email",
//     to:"jonatan.mayert46@ethereal.email",
//     subject:"new message",
//     text:"hello welcome to nodemailer",
//     html:`<h1>hello bro</h1>
//     <img src='cid:food'/>`,
//     attachments:[
//         {
//             filename:'hello.jpeg',
//             path:'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600',
//             cid:'food'
//         }
//     ]
// }
// transporter.sendMail(options, (err, info) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//     console.log('sent successfully');
//     console.log(info.messageId);
//     }
// })

// app.listen(9000, () => {
//     console.log('9000');
// })

//-----------------------------------------------------------------

// const http = require('http');
// const server = http.createServer((req, res) => {
//     const path = req.url;
//     if(path === '/'){
//         res.write('home page');
//         res.end();
//     }
//     else if(path === '/register'){
//         res.write('register page')
//         res.end();
//     }
// })

// server.listen(9000, () =>{
//     console.log('9000');
// })

// const express = require('express');

// const app = express();

// app.listen(9000, () => {
//     console.log('server is running on 9000');
// })


// const express = require('express');
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken');
// const app = express();

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('hello')
// })
// const saltRounds = 10;
// const arr = [];
// app.post('/signup', async (req, res) => {
//     const user = req.body;
// //    const salt = await bcrypt.genSalt(saltRounds)
// //    const hassp = await bcrypt.hash(user.password, salt)

// // await bcrypt.genSalt(saltRounds, (err, s) => {
// //     if(err){
// //         console.log(err);
// //     }
// //       await bcrypt.hash(user.password,s,(err, hass) => {
// //             if(err){
// //                 console.log(err);
// //             }
// //             console.log(hass);
// //             res.send(hass)

// //          })
    
    
// // })

// const hashpassword = await bcrypt.hash(user.password,saltRounds)
//     const obj = {
//         name:user.name,
//         email:user.email,
//         password:hashpassword
//     }
//     arr.push(obj)
//     res.send(arr)

// })
// const middle = (req, res, next) => {
//     const token = req.headers['authorization']
//     const re = token.split(' ')[1]
//     req.token = re;
//     next()
// }
// app.post('/login',  async(req, res) => {
//     const user = req.body
//     await arr.forEach( (e) => {
//         if(e.name == user.name){
//             bcrypt.compare(user.password,e.password, (err, correct) => {
//                 if(err){
//                     console.log('error');
//                 }
//                 if(correct){
//                     jwt.sign(user,'rakesh', (err, token) => {
//                         if(err){
//                             res.send('error')
//                         }
//                         else{
//                             res.send({
//                                 token
//                             })
//                         }
//                     })
//                 }
//                 else{
//                     res.send('invalid user')
//                 }
//             })
//         }
        
//     })
// })


// app.get('/new', middle, (req, res) =>{
//     jwt.verify(req.token,'rakesh', (err, token) => {
//         if(err){
//             res.send('error')
//         }
//         res.send({
//             token
//         })
//     })
// })
// app.listen(9000, () => {
//     console.log('server is running on 9000');
// })



//-----------------------------------------------------------------------------------------------

// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.write('home page');
//     res.end();
// })


// server.listen(9000, () => {
//     console.log('9000');
// })


//-----------------------------------------------------------------------------------------------

// const http = require('http');
// const server = http.createServer((req, res) => {
//     const path = req.url;
//     if(path === '/'){
//         res.write('<h1>Home Page<h1/>');
//         res.end()
//     }
//     else if(path === '/register'){
//         res.write('<h1>Register page<h1/>');
//         res.end()
//     }
//     else if(path === '/login'){
//         res.write('<h1>Login Page<h1/>')
//     }
//     else{
//         res.write('<h1>Error Page<h1/>');
//         res.end();
//     }
// })


// server.listen(9000, () => {
//     console.log('9000');
// })


// const http = require('http');
// // const {sum} = require('./data');
// const da = require('./data');
// const server = http.createServer((req, res) => {
//         res.write('<h1>Home Page<h1/>');
//         res.end()
// })


// server.listen(9000, () => {
//     console.log('9000');
//     console.log(da.data());
// })


// const express = require('express');

// const app = express();

// app.listen(9000, () =>{
//     console.log('9000');
// })


// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>Home Page<h1/>');
// })

// app.get('/register', (req, res) => {
//     res.send('<h1>Register Page<h1/>');
// })

// app.get('/login', (req, res) => {
//     res.send('<h1>Login Page<h1/>');
// })

// app.listen(9000, () =>{
//     console.log('9000');
// })

// const express = require('express');
// // const details = require('./data')
// const {sum} = require('./data')

// const app = express();

// app.get('/', (req, res) =>{
//     res.send('home page')
// }) 
// app.listen(9000, () =>{
//     console.log('9000');
//     // console.log(details.data());
//     console.log(sum(4,5));
// })


// const express = require('express');
// const middle = require('./middle')
// const app = express();
// app.use(express.json());


// app.get('/', (req, res) => {
//     res.send('Home Page')
// })

// app.get('/login',middle, (req, res) => {
//     res.json([
//         {name:"rakesh",age:23,id:5882},{name:"durgam",age:24,id:100},{name:"vishnu",age:25,id:101}
//     ])
// })

// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const route = require('./route')
// const app = express();
// app.use(express.json());

// app.use(route);

// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const app = express();

// app.use(express.json());

// const saltRounds =10;

// const data = [];

// const secretKey = 'rakesh';

// app.get('/', (req, res) => {
//     res.send('home page')
// })

// app.post('/register', async (req, res) => {
//     const user = req.body;
//     const hasspassword = await bcrypt.hash(user.password, saltRounds);
//     let userData = {
//         name:user.name,
//         email:user.email,
//         password:hasspassword
//     }
//     data.push(userData);
//     res.send(data);
// })

// app.post('/login', async (req, res) =>{
//     const user = req.body;
//     await data.forEach((eachItem) => {
//         if(eachItem.email === user.email){
//             bcrypt.compare(user.password, eachItem.password, (err, isValid) => {
//                 if(err){
//                     res.send('error');
//                 }
//                 else{
//                     if(isValid){
//                         jwt.sign({user}, secretKey, (err, token) => {
//                             if(err){
//                                 res.send('error')
//                             }
//                             res.send({
//                                 token
//                             })
//                         })
//                     }
//                     else{
//                         res.json({
//                             message:"user is not valid"
//                         })
//                     }
//                 }
//             })
//         }
//         else{
//             res.json({
//                 message:"email is not valid"
//             })
//         }
//     })
// })

// const middleware = (req, res, next) => {
//     const token = req.headers['authorization'];
//     const result = token.split(' ')[1];
//     req.token = result;
//     next();
// }
// app.get('/newapi',middleware, (req, res) => {
//     jwt.verify(req.token, secretKey, (err, token) => {
//         if(err){
//             res.send('error');
//         }
//         res.send({
//             token
//         })
//     })
// })
// app.listen(9000, () => {
//     console.log('9000');
// })


// const express = require('express');

// const app = express();

// const moddile = (req, res, next) => {
//     const api = '1234'
//     if(req.query.apikey && req.query.apikey === api){
//         next();
//     }
//     else{
//         res.json({
//             message:"no valid apikey"
//         })
//     }

// }
// app.get('/login', moddile, (req, res) => {
//     res.send('data coming')
// })

// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();

// const transport = nodemailer.createTransport({
//     host:'smtp.ethereal.email',
//     port:587,
//     auth:{
//         user: 'angelita.gaylord10@ethereal.email',
//         pass: 'Ax3NXYjD37USb3FSxQ'
//     }
// })

// const options = {
//     from:"angelita.gaylord10@ethereal.email",
//     to:"angelita.gaylord10@ethereal.email",
//     subject:"send message",
//     text:"hello welcome to nodemailer",
//     html:"<img src='cid:new'/>",
//     attachments:[{
//         filename:'hello.png',
//         path:'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600',
//         cid:'new'
//     }]

// }

// transport.sendMail(options, (err, info) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('sent successfully!!!');
//         console.log(info.messageId);
//     }
// })
// app.listen(9000, () => {
//     console.log('9000');
// })


// const express = require('express');
// const nodemailer = require('nodemailer');

// const app = express();

// const transport = nodemailer.createTransport({
//     service:"gmail",
//     auth:{
//         user:"durgamrakesh11@gmail.com",
//         pass:"catrzoruqyqlvcfm"
//     }
// })

// const options = {
//     from:"durgamrakesh11@gmail.com",
//     to:"durgamrakesh11@gmail.com",
//     subject:"nodemailer",
//     text:"message from nodemiler",
//     html:`<h1>hello</h1> 
//     <img src='cid:hi'/>`,
//     attachments:[
//         {
//             filename:"hello.png",
//             path:"https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600",
//             cid:"hi"
//         }
//     ]
// }

// transport.sendMail(options, (err, info) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('sent successfully');
//         console.log(info.response);
//     }
// })
// app.listen(9000, () => {
//     console.log('9000');
// })



// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const connection = require('./connection')
// const model = require('./Schema');
// const app = express();

// app.use(express.json());

// const saltRounds =10;

// const data = [];

// const secretKey = 'rakesh';

// app.get('/', (req, res) => {
//     res.send('home page')
// })

// app.post('/register', async (req, res) => {
//     const user = req.body;
//     const usersd = await model.findOne({email:user.email})
//     if(!usersd){
//         const hasspassword = await bcrypt.hash(user.password, saltRounds);
//         let userData = new model({
//             email:user.email,
//             password:hasspassword
//         })

//         await userData.save();
//     res.status(200).send({
//         msg:"done"
//     })
//     }
//     else{
//         res.status(400).send({
//             msg:"email is already exists"
//         })
//     }
    
   
// })

// app.post('/login', async (req, res) =>{
//     const user = req.body;

//     const usere = await model.findOne({email:user.email})
//     if(!usere){
//         return res.send({
//             msg:"email wrong"
//         })
//     }
//     const v = await bcrypt.compare(user.password,usere.password);
//     if(!v){
//         return res.send({
//             msg:"password wrong"
//         })
//     }
//     return res.send({
//         msg:"user logged in"
//     })
//     // await data.forEach((eachItem) => {
//     //     if(eachItem.email === user.email){
//     //         bcrypt.compare(user.password, eachItem.password, (err, isValid) => {
//     //             if(err){
//     //                 res.send('error');
//     //             }
//     //             else{
//     //                 if(isValid){
//     //                     jwt.sign({user}, secretKey, (err, token) => {
//     //                         if(err){
//     //                             res.send('error')
//     //                         }
//     //                         res.send({
//     //                             token
//     //                         })
//     //                     })
//     //                 }
//     //                 else{
//     //                     res.json({
//     //                         message:"user is not valid"
//     //                     })
//     //                 }
//     //             }
//     //         })
//     //     }
//     //     else{
//     //         res.json({
//     //             message:"email is not valid"
//     //         })
//     //     }
//     // })
// })

// const middleware = (req, res, next) => {
//     const token = req.headers['authorization'];
//     const result = token.split(' ')[1];
//     req.token = result;
//     next();
// }
// app.get('/newapi',middleware, (req, res) => {
//     jwt.verify(req.token, secretKey, (err, token) => {
//         if(err){
//             res.send('error');
//         }
//         res.send({
//             token
//         })
//     })
// })


// app.put('/putapi/:id', async (req, res) => {
//     const id = req.params.id;
//     const email = req.body.email;
//     await model.updateOne({ _id: id }, { $set: { email: email } })
//     return res.send("email updated")
// })

// app.delete('/putapi/:id', async (req, res) => {
//     const id = req.params.id;
//     const email = req.body.email;
//     await model.deleteOne({ _id: id })
//     return res.send("data deleted")
// })

// app.listen(9000,async () => {
//     console.log('9000');
//     await connection;
//     console.log('connected...');
// })







// what is mongo db
// insert one v/s insert many
// sql v/s nosql
// schema
// model
// connection using mongoose
// cloud server
// crud










// const express = require("express")
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const conextion = require("./config/db");
// const projectmodel = require("./projectschema/projectmodel");
// const app = express();
// const seckertkey = "aka";
// app.use(express.json())
// // const array = []
// const saltround = 10;

// app.get("/", (req, res) => {
//     res.send("hello!!!")
// })
// const middleware = (req, res, next) => {
//     const token = req.headers["authorization"]
//     const result = token.split(" ")[1]
//     jwt.verify(result, seckertkey, (err, data) => {
//         res.send(data)
//     })
// }
// app.post("/signup", async (req, res) => {

//     const details = req.body;
//     const users = await projectmodel.findOne({ email: details.email })
//     if (!users) {
//         const hashpassword = await bcrypt.hash(details.password, saltround)
//         let obj = new projectmodel({
//             email: details.email,
//             password: hashpassword
//         })
//         await obj.save();
//         // array.push(obj)
//         // res.send(array)
//         res.send({ msg: "registration successfully done" })
//         return;
//     }
//     res.status(404).send({ msg: "email already exits try to login " })
//     // res.send(array)
// })
// app.post("/login", async (req, res) => {
//     const data = req.body;

//     const user = await projectmodel.findOne({ email: data.email })// true
//     if (!user) {
//         return res.send({ msg: "email is wrong" })
//     }
//     const validate = await bcrypt.compare(data.password, user.password)
//     if (!validate) {
//         res.send({ msg: "password is wrong" })
//     }
//     return res.send({ msg: "user loged in" })

//     // array.find(async (items) => {
//     //     console.log(items)
//     //     if (items.email == data.email) {
//     //         console.log("user exists try to give the details")
//     //         await bcrypt.compare(data.password, items.password, (err, validate) => {
//     //             if (err) {
//     //                 console.log(err)
//     //             }
//     //             else {
//     //                 console.log(validate)
//     //                 jwt.sign(data, seckertkey, (err, token) => {
//     //                     if (err) {
//     //                         console.log(err)
//     //                     }
//     //                     res.send(token)
//     //                 })
//     //             }
//     //         })
//     //     }
//     // })
// })

// app.put("/hiddenapi/:id", async (req, res) => {
//     try {
//         const id = req.params.id;
//         const email = req.body.email;
//         await projectmodel.updateOne({ _id: id }, { $set: { email: email } })
//         return res.send("email updated")
//     }
//     catch (err) {
//         console.log(err)
//     }
// })



// app.listen(6060, async () => {
//     try {
//         await conextion;
//         console.log("connection has been made")
//     }
//     catch (err) {
//         console.log(err)
//     }

// })


//------------------------------------------------------------------------------------

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('<h1>home page</h1>');
//     res.end();
// })

// server.listen(9000, () => {
//     console.log('9000');
// })

// const http = require('http');

// const server = http.createServer((req, res) => {
//     const path = req.url;
//     if(path === '/'){
//         res.write('<h1>Home Page</h1>');
//         res.end();
//     }
//     else if(path === '/register'){
//         res.write('<h1>Register Page</h1>');
//         res.end();
//     }
//     else if(path === '/login'){
//         res.write('<h1>Login Page</h1>');
//         res.end();
//     }
//     else{
//         res.write('<h1>Error Page</h1>');
//         res.end();
//     }
// })

// server.listen(9000, () => {
//     console.log('9000');
// })


// const http = require('http');
// // const {add} = require('./data')
// const newdata = require('./data')
// const server = http.createServer((req, res) => {
//         res.write('<h1>Home Page</h1>');
//         res.end();
// })

// server.listen(9000, () => {
//     console.log('9000');
//     // console.log(add(4,5));
//     console.log(newdata.data());
// })


// const express = require('express');

// const app = express();

// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>Home Page</h1>');
// })

// app.get('/register', (req, res) => {
//     res.send('<h1>Register Page</h1>');
// })

// app.get('/login', (req, res) => {
//     res.send('<h1>Login Page</h1>');
// })

// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// // const {add} = require('./data');
// const newdata = require('./data');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>Home Page</h1>');
// })

// app.listen(9000, () => {
//     console.log('9000');
//     // console.log('sum is:',add(4,5));
//     console.log(newdata.data());
// })

// const express = require('express');

// const router = require('./route');

// const app = express();

// app.use(express.json());

// app.use(router);

// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const app = express();
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('home page')
// })
// const salt = 10;
// const newarr = [];

// app.post('/register', async (req, res) => {
//     const data = req.body;
//     const hass = await bcrypt.hash(data.password, salt);
//     let newobj = {
//         name:data.name,
//         email:data.email,
//         password:hass,
//     }
//     newarr.push(newobj);
//     res.send(newarr);
// })

// app.post('/login',  (req, res) => {
//     newarr.find( async (e) => {
//         if(e.email === req.body.email){
//             await bcrypt.compare(req.body.password, e.password, (err, noerror) => {
//                 if(err){
//                     res.send('error');
//                 }
//                 else{
//                     if(noerror){
//                         jwt.sign(req.body, 'rakesh', (err, token) => {
//                             if(err){
//                                 res.send('error');
//                             }
//                             res.send({
//                                 token
//                             })
//                         })
//                     }
//                     else{
//                         res.send('password not match')
//                     }
//                 }
//             })
//         }
//         else{
//             res.send('no email found')
//         }
//     })
// })

// const m = (req, res, next) => {
//     const token = req.headers['authorization'];
//     const result = token.split(' ')[1];
//     req.token = result;
//     next();
// }

// app.get('/fr', m, async (req, res) => {
//     await jwt.verify(req.token, 'rakesh', (err, token) => {
//         if(err){
//             res.send(err);
//         }
//         res.send({
//             token
//         })
//     })
// })
// app.listen(9000, () => {
//     console.log('9000');
// })


// const express = require('express');
// const bcrypt = require('bcrypt');
// const connection = require('./connection');
// const model = require('./Schema');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json())

// app.get('/', async (req, res) => {
//     const r = await model.find()
//     res.send(r)
// })

// app.post('/register', async (req, res) => {
//     const details = req.body;
//     const user = await model.findOne({ email: details.email })
//     if(!user){
//         const hass = await bcrypt.hash(details.password,10);
//         let data = new model({
//             email:details.email,
//             password:hass
//         })

//         await data.save();
//         res.send('registerd sucess')
//     }
//     else{
//         res.send('user already exists try to login')
//     }
// })

// app.post('/login', async (req, res) => {
//     const d = req.body;
//     const user = await model.findOne({ email: d.email })
//     if(!user){
//         res.json({
//             msg:"email wrong"
//         })
//     }
//     console.log(user);
//     const validate = await bcrypt.compare(d.password,user.password);
//     if(!validate){
//         return res.json({
//             msg:"password is wrong"
//         })
//     }
//     res.send({
//         msg:"user logged in!!!"
//     })
// })

// app.put('/putapi/:id', async (req, res) => {
//     try {
//     const id = req.params.id;
//     await model.updateOne({_id:id},{$set:{email:req.body.email}});
//     return res.send('email updated...')
//     } catch (error) {
//         console.log(error);
//     }
    
// })

// app.delete('/putapi/:id', async (req, res) => {
//     try {
//     const id = req.params.id;
//     await model.deleteOne({_id:id});
//     return res.send('deleted...')
//     } 
//     catch (error) {
//         console.log(error);
//     }
    
// })

// app.listen(9000, async () => {
//     console.log('9000');
//     await connection();
//     console.log('db connected...');
// })


//--------------------------------------------------------------------------------------------------

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('home page');
//     res.end();
// })

// server.listen(9000, () =>{
//     console.log('9000');
// })

// const http = require('http');

// const server = http.createServer((req, res) => {
//     const path = req.url;

//     if(path === '/'){
//         res.write('<h1>Home Page</h1>');
//         res.end();
//     }
//     else if(path === '/register'){
//         res.write('<h1>Register Page</h1>');
//         res.end();
//     }
//     else if(path === '/login'){
//         res.write('<h1>Login Page</h1>');
//         res.end();
//     }
    
// })

// server.listen(9000, () =>{
//     console.log('9000');
// })


// const http = require('http');
// // const d = require('./data');
// const {add} = require('./data');

// const server = http.createServer((req, res) => {
//     res.write('home page');
//     res.end();
// })

// server.listen(9000, () =>{
//     console.log('9000');
//     // console.log('data',d.data());
//     console.log('sum',add(4,5));
// })

// const express = require('express');

// const app = express();

// app.listen(9000, () =>{
//     console.log('9000');
// })

// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>Home Page</h1>');
// })

// app.get('/register', (req, res) => {
//     res.send('<h1>Register Page</h1>');
// })

// app.get('/login', (req, res) => {
//     res.send('<h1>Login Page</h1>');
// })

// app.listen(9000, () =>{
//     console.log('9000');
// })


// const express = require('express');
// // const d = require('./data');
// const { add } = require('./data');
// const app = express();

// app.listen(9000, () =>{
//     console.log('9000');
//     // console.log(d.data())
//     console.log(add(4,5));
// })

// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     res.json([
//         {name:'rakesh',age:23,id:5882},{name:'durgam',age:24,id:100},{name:'vishnu',age:25,id:101}
//     ])
// })

// app.listen(9000, () => {
//     console.log('9000');
// })


// const express = require('express');
// const router = require('./route');

// const app = express();
// app.use(express.json());

// app.use(router)

// app.listen(9000, () =>{
//     console.log('9000');
// })

// const express = require('express');

// const app = express();
// app.use(express.json());


// const middle = (req, res, next) =>{
//     const apikey = '1234';

//     if(req.query.api && req.query.api === apikey){
//         next();
//     }
//     else{
//         res.send('error')
//     }
// }
// app.get('/', middle, (req, res) => {
//     res.send({
//         message:"hello"
//     })
// })
// app.listen(9000, () =>{
//     console.log('9000');
// })


// const express  = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const app = express();

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('home page');
// })


// const arr = [];

// app.post('/register',async (req, res) => {
//     const user = req.body;
//     const hash = await bcrypt.hash(user.password,10);

//     let newdata = {
//         email:user.email,
//         password:hash
//     }
//     arr.push(newdata);
//     res.send(arr);
// })


// app.post('/login', (req, res) => {
//     arr.find(async (e) => {
//         if(e.email == req.body.email){
//             await bcrypt.compare(req.body.password, e.password, (err, valid) => {
//                 if(err){
//                     res.send(err);
//                 }
//                 else{
//                     if(valid){
//                          jwt.sign(req.body, 'rakesh', (err, token) =>{
//                             if(err){
//                                 res.send('error in token')
//                             }
//                             res.send({
//                                 token
//                             })
//                          })
//                     }
//                     else{
//                         res.send('invalid password');
//                     }
//                 }
//             })
//         }
//         else{
//             res.send('invalid email')
//         }
//     })
// })

// const middle = (req, res, next) =>{
//     const token = req.headers['authorization'];
//     const result = token.split(' ')[1];
//     req.token = result;
//     next();
// }
// app.get('/fr', middle, (req, res) => {
//     jwt.verify(req.token, 'rakesh', (err, token) => {
//         if(err){
//             res.send('error');
//         }
//         res.send({
//             token
//         })
//     })
// })
// app.listen(9000, () => {
//     console.log('9000');
// })


// const express = require('express');
// const connection = require('./connection');
// const usermodel = require('./Schema');
// const bcrypt = require('bcrypt');

// const jwt = require('jsonwebtoken');

// const app = express();

// app.use(express.json());


// app.post('/register', async (req, res) => {
//     const data = req.body;
//     const user = await usermodel.findOne({email:data.email});
//     if(!user){
//         const hash = await bcrypt.hash(data.password,10);
//         const d = new usermodel({
//             email:data.email,
//             password:hash
//         })
//         await d.save();
//         res.send(d);
//     }
//     else{
//         res.send({
//             message:'user is already exists try to login...'
//         })
//     }

// })

// app.post('/login', async (req, res) => {
//     const data = req.body;
//     const user = await usermodel.findOne({email:data.email});

//     if(!user){
//         return res.send({
//             message:"email is wrong..."
//         })
//     }
//     else{
//         const validate = await bcrypt.compare(data.password, user.password)
//         if(!validate){
//             return res.send({
//                 message:"password is wrong..."
//             })
//         }
//         else{
//             // return res.send({
//             //     message:"user is valid..."
//             // }) 
//             await jwt.sign(data, 'rakesh', (err, token) => {
//                 if(err){
//                     res.send('error');
//                 }
//                 res.send(token)
//             })
//         }

//     }

// })

// const middle = (req, res, next) =>{
//     const token = req.headers['authorization'];
//     const result = token.split(' ')[1];
//     req.token = result;
//     next();
// }
// app.get('/fr', middle, (req, res) => {
//     jwt.verify(req.token, 'rakesh', (err, token) => {
//         if(err){
//             res.send('error');
//         }
//         res.send({
//             token
//         })
//     })
// })

// app.put('/putapi/:id', async (req, res) => {
//     const id = req.params.id;
//     const email = req.body.email;
//     await usermodel.updateOne({_id:id},{$set:{email:email}})
//     res.send({
//         message:"data is updated..."
//     })
// })

// // app.delete('/putapi/:id', async (req, res) => {
// //     const id = req.params.id;
// //     await usermodel.deleteOne({_id:id})
// //     res.send({
// //         message:"data is deleted..."
// //     })
// // })

// app.delete('/putapi/:email', async (req, res) => {
//     const email = req.params.email;
//     await usermodel.deleteMany({email:email})
//     res.send({
//         message:"data is deleted..."
//     })
// })

// app.get('/getdata', async (req, res) => {
//     const result = await usermodel.find();
//     res.send(result)
// })
// app.listen(9000, () => {
//     console.log('9000');
//     connection();
// })


//-------------------------------------------------------------------------------------

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('home page');
//     res.end()
// })

// server.listen(9000, () =>{
//     console.log('9000');
// })


// const http = require('http');

// const server = http.createServer((req, res) => {

//     const path = req.url;
//     if(path === '/'){
//         res.write('Home Page');
//         res.end();
//     }
//     else if(path === '/register'){
//         res.write('Register Page');
//         res.end();
//     }
//     else if(path === '/login'){
//         res.write('Login Page');
//         res.end();
//     }
// })

// server.listen(9000, () =>{
//     console.log('9000');
// })

// const http = require('http');
// // const {add} = require('./data')
// const d = require('./data')
// const server = http.createServer((req, res) => {
//         res.write('Home Page');
//         res.end();
// })

// server.listen(9000, () =>{
//     console.log('9000');
//     // console.log('sum',add(4,5));
//     console.log('data',d.data());
// })

// const exress = require('express');

// const app = exress();

// app.listen(9000, () =>{
//     console.log('9000');
// })

// const exress = require('express');

// const app = exress();

// app.get('/', (req, res) =>{
//     res.send('Home Page');
// })

// app.get('/register', (req, res) =>{
//     res.send('Register Page');
// })

// app.get('/login', (req, res) =>{
//     res.send('Login Page');
// })

// app.listen(9000, () =>{
//     console.log('9000');
// })

// const exress = require('express');
// // const d = require('./data');
// const { add } = require('./data');

// const app = exress();

// app.get('/', (req, res) =>{
//     res.send('Home Page');
// })



// app.listen(9000, () =>{
//     console.log('9000');
//     // console.log('data',d.data());
//     console.log('sum',add(4,5));

// })

// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     res.json([
//         {name:"rakesh",age:23,id:5882},{name:"durgam",age:24,id:100},{name:"vishnu",age:25,id:101}
//     ])
// })

// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const router = require('./route');

// const app = express();

// app.use(express.json());

// app.use(router);

// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const app = express();

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('home page');
// })
// const arr = [];

// app.post('/register', async (req, res) => {
//     const user = req.body;
//     const hass = await bcrypt.hash(user.password, 10);

//     let data = {
//         email:user.email,
//         password:hass
//     }

//     arr.push(data);
//     res.send(arr)
// })

// app.post('/login', (req, res) => {

//     arr.find(async (eachItem) => {
//         if(eachItem.email === req.body.email){
//             await bcrypt.compare(req.body.password, eachItem.password, (err, valid) => {
//                 if(err){
//                     res.send('error')
//                 }
//                 else{
//                     if(valid){
//                          jwt.sign(req.body, 'rakesh', (err, token) => {
//                             if(err){
//                                 res.send('error')
//                             }
//                             res.send({
//                                 token
//                             })
//                          })
//                     }
//                     else{
//                         res.send({
//                             message:"invalid password"
//                         })
//                     }
//                 }
//             });
//         }
//         else{
//             res.send({
//                 message:"invalid email"
//             })
//         }
//     })
// })
// const middel = (req, res, next) => {
//     const token = req.headers['authorization'];
//     const result = token.split(' ')[1];
//     req.token = result;
//     next();
// }
// app.get('/fr', middel, (req, res) => {
//     const user = req.body;

//     jwt.verify(req.token, 'rakesh', (err, token) => {
//         if(err){
//             res.send('error');
//         }
//         res.send({
//             token
//         })
//     })


// })
// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const nodemailer = require('nodemailer');

// const app = express();

// app.get('/', (req, res) => {
//     res.send('home page')
// })

// const transport = nodemailer.createTransport({
//     service:"gmail",
//     auth:{
//         user:"durgamrakesh11@gmail.com",
//         pass:"catrzoruqyqlvcfm"
//     }
// })

// const options = {
//     from:"durgamrakesh11@gmail.com",
//     to:"sravankannarapu@gmail.com",
//     subject:"hacker get alert!!!",
//     text:"hi we have hacked your bankaccount which is null balance please maintain atleast lacha rupees(100000)!!!",
//     html:`<h1>Some one hacked your account please get alert!!!</h1>
//     <h1>hi we have hacked your bankaccount which is null balance please maintain atleast lacha rupees(100000)!!!</h1>
//     <img src='cid:hacker'/>`,
//     attachments:{
//         ilename:"hacker.png",
//         path:"https://images.pexels.com/photos/14000464/pexels-photo-14000464.jpeg?auto=compress&cs=tinysrgb&w=600",
//         cid:"hacker"
//     }

// }
// transport.sendMail(options, (err,info) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('ok');
//         console.log(info.messageId);
//     }
// })
// app.listen(9000, () =>{
//     console.log('9000');
// })


// const express = require('express');
// const connection = require('./connection')
// const usermodel = require('./Schema');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const app = express();

// app.use(express.json());


// app.post('/register', async (req, res) => {
//     const u = req.body;
//     const userfind = await usermodel.findOne({email:u.email})
//     if(!userfind){
//         const hass = await bcrypt.hash(u.password, 10);

//         let newdata = new usermodel({
//             email:u.email,
//             password:hass
//         })

//         await newdata.save();
//         return res.send(newdata);
//     }
//     else{
//         res.send({
//             message:"user is exists try to login"
//         })
//     }
// })


// app.post('/login', async (req, res) => {
//     const u = req.body;
//     const userfind = await usermodel.findOne({email:u.email})
//     if(!userfind){
//         return res.send({
//             message:"wrong email"
//         })
//     }
//     else{
//         const validate = await bcrypt.compare(u.password,userfind.password);
//         if(!validate){
//             return res.send({
//                 message:"wrong password"
//             })
//         }
//         else{
//             jwt.sign(u,'rakesh', (err, token) => {
//                 if(err){
//                     return res.send({
//                         message:"error"
//                     })
//                 }
//                 res.send({
//                     token
//                 })
//             })
//         }
//     }
// })

// app.get('/', async (req, res) => {
//     const response = await usermodel.find()
//     res.send(response);
// })
// app.put('/putapi/:id', async (req, res) => {
//     const id = req.params.id;
//     await usermodel.updateOne({_id:id},{$set:{email:req.body.email}});
//     res.send('updated...');
// })

// app.delete('/putapi/:id', async (req, res) => {
//     const id = req.params.id;
//     await usermodel.deleteOne({_id:id});
//     res.send('deleted...');
// })

// app.delete('/putapi', async (req, res) => {
//     await usermodel.deleteMany();
//     res.send('deleted...');
// })
// app.listen(9000, async () =>{
//     console.log('9000');
//     await connection();
// })

//---------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const connection = require('./connection');
// const model = require('./Schema');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');


// const app = express();
// app.use(express.json());

// app.post('/register', async (req, res) => {
//     const data = req.body;
//     const userdata = await model.findOne({email:data.email});
//     if(!userdata){
//         const hass = await bcrypt.hash(data.password,10);
//         let newdata = new model({
//             email:data.email,
//             password:hass
//         })

//         await newdata.save();
//         res.send(newdata);
//     }
//     else{
//         res.send({
//             message:"user already exists try to loggin!!!"
//         })
//     }
// })

// app.post('/login', async (req, res) => {
//     const data = req.body;
//     const userdata = await model.findOne({email:data.email});
//     if(!userdata){
//         res.send({
//             message:"email is wrong"
//         })
//     }
//     else{
//         const valid = await bcrypt.compare(data.password,userdata.password);
//         if(!valid){
//             res.send({
//                 message:"password is wrong"
//             }) 
//         }
//         else{
//             await jwt.sign(data, 'rakesh', (err, token) => {
//                 if(err){
//                     res.send('error');
//                 }
//                 res.send({
//                     token
//                 })
//             })
//         }
//     }
// })
// const middle = (req, res, next) =>{
//     const token = req.headers['authorization'];
//     const r = token.split(' ')[1];
//     req.token = r;
//     next();
// }
// app.get('/fr', middle, async (req, res) => {
//     await jwt.verify(req.token , 'rakesh', (err, token) => {
//         if(err){
//             res.send(err);
//         }
//         res.send({
//             token
//         })
//     })
// })

// app.put('/putapi/:id', async (req, res) =>{
//     const id = req.params.id
//     const email = req.body.email;
//     const response = await model.updateOne({_id:id},{$set:{email:email}});
//     res.status(200).send(response);
// })

// app.delete('/putapi/:id', async (req, res) =>{
//     const id = req.params.id
//     const response = await model.deleteOne({_id:id});
//     res.status(200).send(response);
// })

// app.get('/', async (req, res) =>{
//     const response = await model.find();
//     res.status(200).send(response);
// })
// app.listen(9000, async() =>{
//     console.log('9000');
//     await connection();
// })

// const exress = require('express');
// const nodemailer = require('nodemailer');

// const app = exress();
// const transport = nodemailer.createTransport({
//     service:"gmail",
//     auth:{
//         user:"durgamrakesh11@gmail.com",
//         pass:"catrzoruqyqlvcfm"
//     }
// })

// const options = {
//     from:"durgamrakesh11@gmail.com",
//     to:"durgamrakesh11@gmail.com",
//     subject:"nodemailer",
//     text:"ojehgoogogo",
//     html:`<h1>hello</h1
//     <img src="cid:image"/>`,
//     attachments:{
//         filename:"img.png",
//         path:"https://images.pexels.com/photos/14000464/pexels-photo-14000464.jpeg?auto=compress&cs=tinysrgb&w=600",
//         cid:"image"
//     }
// }

// transport.sendMail(options, (err, info) => {
//     if(err){
//         console.log('error');
//     }
//     console.log('ok');
//     console.log(info.response);
// })
// app.listen(9000, () => {
//     console.log('9000')
// })

// const express = require('express');
// const jwt = require('jsonwebtoken');

// const app = express();
// app.use(express.json());

// app.post('/login', async (req, res) =>{
//     const user = req.body;
//     await jwt.sign(user, 'rakesh', (err, token) => {
//         if(err){
//             res.send('error')
//         }
//         res.send({
//             token
//         })
//     })
// })
// const middle = (req, res, next) =>{
//     const token = req.headers['authorization'];
//     const result = token.split(' ')[1];
//     req.token = result;
//     next();
// }
// app.get('/fr', middle, async (req, res) =>{
//     await jwt.verify(req.token, 'rakesh', (err, token) => {
//         if(err){
//             res.send('error')
//         }
//         res.send({
//             token
//         })
//     })
// })

// app.listen(9000, () => {
//     console.log('9000')
// })

// const express = require('express');

// const app = express();

// app.listen(9000, () => {
//     console.log('9000')
// })

































