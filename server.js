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


const express = require('express');
const app = express();
app.use(express.json())
const m = (req, res, next) => {
    const apikey = '1234'

    if(req.query.api_key && (req.query.api_key === apikey)){
        next();
    }
    else{
        res.json({
            "msg":'no data'
        })
    }
}
app.use(m);
app.get('/login', (req, res) => {
    res.json([
        {
            "id":"1",
            "name":'rakesh'
        },
        {
            "id":"2",
            "name":'rakesh2'
        },
        {
            "id":"3",
            "name":'rakesh3'
        }
    ])
})
app.get('/register', (req, res) => {
    res.send('register page')
})
app.listen(9000, () => {
    console.log('9000');
})