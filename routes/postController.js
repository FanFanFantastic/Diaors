const express = require('express');
var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var { Post } = require('../models/post');

//Get all of the post from the database
router.get('/list', (req, res)=>{
  console.log("Got here!");
    Post.find((err,doc)=>{
        console.log("Got inside");
        if(!err) { 
          res.send(doc); 
        }
        else {
            console.log("Error in retriving all of the posts: ") +JSON.stringify(err);
        }
    });
});

//Add a new post to the database
router.post('/',(req, res)=>{

  var newPost = new Post({
    title: req.body.title,
    body: req.body.body,
    likes: req.body.likes, 
    created_by: req.body.created_by,
    created_at: req.body.created_at
  });

  console.log("send Post triggered");

  newPost.save((err, doc)=>{
    if(!err) {
      res.send(doc);
    }
    else {
      console.log('Error in Employee Save :' + JSON.stringify(err));
    }
  });

});

//Get a post by the post ID
router.get('/:id',(req, res) => {

  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Post.findById(req.params.id, (err, doc)=>{
    if(!err)
      res.send(doc);
    else
      console.log("Error In Retriving Post by ID"+JSON.stringify(err));  
  });  
});

//Edit and update a post
router.put('/:id',(req, res)=>{
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);
  
  var updatingPost = {
    text: req.body.text,
    created_by: req.body.created_by,
    created_at: req.body.created_at,
  }; 

  Post.findByIdAndUpdate(req.params.id, {$set: updatingPost}, {new: true}, (err, doc)=>{
    if(!err) { 
      res.send(doc); }
    else { 
      console.log("Error in post update :" + JSON.stringify(err)) }
  });

});

router.delete('/:id',(req, res)=>{
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`);

  Post.findByIdAndRemove(req.params.id, (err, doc)=>{
    if(!err){
      res.send(doc);
    }
    else{
      console.log("Error in post deletion:" + JSON.stringify(err));
    }
  });  
})

module.exports = router;