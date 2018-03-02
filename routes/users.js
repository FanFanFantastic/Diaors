var express = require('express');

var router = express.Router();

//Register
router.get('/register',(req,res,next)=>{
    res.send("Register");
});

//Authenticate
router.get('/authenticate',(req, res, next)=>{
    res.send('Authenticate');
});

//Profile *protected
router.get('/profile',(req, res, next)=>{
    res.send("Profile");
});

//Validate *protected
router.get('/validate',(req, res, next)=>{
    res.send("Validate");
});

module.exports = router;