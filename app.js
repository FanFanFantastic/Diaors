var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var passport = require('passport');
var mongoose = require('mongoose');
var config = require("./config/database");


mongoose.connect(config.database);

//Database Connect
mongoose.connection.on("connected",()=>{
    console.log("connected to database"+config.database);

});

//Database Error
mongoose.connection.on("error",(error)=>{
    console.log("Database Error:"+error);

});

var app = express();

//Route config
var users = require('./routes/users');

var port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname,'public')));


//var logger = function(req,res,next){
//    console.log('logging');
//    next();
//};
//
//app.use(logger);

//Body parser parse incoming json data
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:false}));

//passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport') (passport);



app.use('/users',users);


app.get('/',(req,res)=>{
    res.send('Invalid Endpoint');
});

app.listen(port,()=>{
    console.log('Server started at port your port '+ port);
});