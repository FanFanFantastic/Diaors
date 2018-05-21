const express = require('express');
var router = express.Router();

var { Post } = require('../models/post');

router.get('/list', (req, res)=>{
    Post.find((err,doc)=>{
        if(!err) { res.send(doc); }
        else {
            console.log("Error in retriving all of the posts: ") +JSON.stringify(err);
        }
    });
});