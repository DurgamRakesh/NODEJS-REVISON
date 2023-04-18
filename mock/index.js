const express = require('express');
const connection = require('./connection');
const bcrypt = require('bcrypt');
const model = require('./userSchema');

const app = express();
const port = 9000;

app.use(express.json());
const saltRounds = 10;

app.post('/register',async (req, res) => {
    const user = req.body;

    const newuser = await model.findOne({email:user.email})
    if(!newuser){
        const hasspassword = await bcrypt.hash(user.password,saltRounds);

        let newdata = new model({
            email:user.email,
            password:hasspassword
        })

        await newdata.save();
        res.send(newdata)
    }
    else{
        res.send({
            message:"user is already exists please try to login..."
        })
    }
})

app.post('/login', async (req, res) => {
    const user1 = req.body;
    const newuser1 = await model.findOne({email:user1.email});

    if(!newuser1){
        return res.send({
            message:"email is not valid please try with another one..."
        })
    }
    else{
        const validateUser = await bcrypt.compare(user1.password, newuser1.password);

        if(!validateUser){
            return res.send({
                message:"password is not valid..."
            })
        }
        else{
            return res.send({
                message:"user is logged in..."
            })
        }
    }
})
app.listen(port, async () =>{
    console.log(`server is runnin on port ${port}`);
    await connection();
})

