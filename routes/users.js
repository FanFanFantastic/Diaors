var express = require('express');
var router = express.Router();
var User = require('../models/user');


var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../config/database');

//Register
router.post('/register',(req,res,next)=>{
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser,(err,user)=>{
        if(err)
        {
            res.json({success:false,msg:"Failed to register user"});
        } 
        else 
        {
            res.json({success:true,msg:"User Registered"});
        }

    });

});

//Authenticate
router.post('/authenticate',(req, res, next)=>{
    //res.send('Authenticate');
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err,user)=>{

        if(err) throw err;

        if(!user)
        {
            return res.json({success:false, msg:"User not found"});
        }

        User.comparePassword(password, user.password, (err,isMatch)=>{
            if(err) throw err;

            if(isMatch)
            {
                const token = jwt.sign({data:user}, config.secret, {
                    expiresIn: 604800 //1 week
                });

                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username : user.name,
                        email: user.email
                    }
                });
            }
            else
            {
                return res.json({success: false, msg: 'Wrong  password'});
            }
        });

    });
});

//Profile *protected
router.get('/profile',passport.authenticate("jwt", {session:false}),(req, res, next)=>{

    res.json({user:req.user});
});

//Validate *protected
router.get('/validate',(req, res, next)=>{
    res.send("Validate");
});

module.exports = router;