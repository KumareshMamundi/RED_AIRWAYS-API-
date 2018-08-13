var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/routes');
var db = require('./config/db');
var app = express();

mongoose.connect(db.url);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
routes(app);
module.exports=app;