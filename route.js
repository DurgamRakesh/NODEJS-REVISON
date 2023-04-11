const express = require('express');
const middle = require('./middle')
const router = express.Router();


router.post('/login', middle, (req, res) => {
    res.send(req.body.name)
    console.log(req.body.name);
})

module.exports = router;