// const express = require('express');
// const middle = require('./middle')
// const router = express.Router();


// router.post('/login', middle, (req, res) => {
//     res.send(req.body.name)
//     console.log(req.body.name);
// })

// module.exports = router;

// const express = require('express');
// const middle = require('./middle');

// const route = express.Router();

// route.get('/', (req, res) => {
//     res.send('home page')
// })

// route.get('/login',middle, (req, res) => {
//     res.json([
//         {
//             name: "rakesh",
//             age: 23,
//             id: 5882
//         },
//         {
//             name: "durgam",
//             age: 24,
//             id: 100
//         },
//         {
//             name: "vishnu",
//             age: 25,
//             id: 101
//         }
//     ])
// })

// module.exports = route;


// const express = require('express');
// const newmiddelware = require('./middle');

// const router = express.Router();

// router.get('/', newmiddelware, (req, res) => {
//     res.send(req.body.name)
// })

// module.exports = router;

// const express = require('express');
// const middle = require('./middle');

// const router = express.Router();

// router.get('/', middle, (req, res) => {
//     res.send(req.body.email);
// })

// module.exports = router;


const express = require('express');
const middel = require('./middle');
const router = express.Router();

router.get('/', middel, (req, res) => {
    res.send(req.body.email)
})

module.exports = router;