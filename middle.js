// const middle = (req, res, next) => {
//     const user = req.body
//     if(user.name && user.password){
//         next();
//     }
//     else{
//         res.json({
//             msg:"no user found"
//         })
//     }
// }

// module.exports = middle;

// const middle = (req, res, next) => {
//     if(req.body.name && req.body.password){
//         next();
//     }
//     else{
//         res.json({
//             message:"no data found"
//         })
//     }
// }

// module.exports  = middle;

// const newmiddelware = (req, res, next) => {
//     const data = req.body;
//     if(data.name && data.password){
//         next();
//     }
//     else{
//         res.json({
//             msg:"no data found"
//         })
//     }
// }

// module.exports = newmiddelware;

// const middle = (req, res, next) =>{
//     const data = req.body;

//     if(data.email && data.password){
//         next();
//     }
//     else{
//         res.send({
//             message:"no data found!!!"
//         })
//     }
// }

// module.exports = middle;

const middel = (req, res, next)  =>{
    const user = req.body;
    if(user.email && user.password){
        next();
    }
    else{
        res.json({
            message:"no data is found"
        })
    }
}

module.exports = middel;