// Package we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
var User   = require('./app/models/user'); // get our mongoose model

//configuration

var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect database with config.js
app.set('superSecret',config.secret); //secret variable

//use body parser so we can get info from post and/or url parameters
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//use morgan to log requests to the console
app.use(morgan('dev'));

//basic route
app.get('/',function(req,res){
	res.send('The API is at http://localhost:'+port+'/api');
});

app.listen(port);
console.log('Magic happens at http://localhost:'+port);