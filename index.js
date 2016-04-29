'use strict';

var express = require('express')
  , bodyParser = require('body-parser')
  , routes = require('./lib/routes/all.js')
  , mongoose = require('mongoose')
  , config = require('./config/db.js')
  ;
  
var app = express();

/* boiler-plate */
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(config.uri + config.dbName);
var dbEvent = mongoose.connection;
dbEvent.on('error', function () {
  console.error('mongodb connection error!');
});
dbEvent.once('open', function () {
  console.log('mongodb connected!');
});

app.use('/api', routes);

app.listen(8888, function () {
    console.log("listening on 8888");
});