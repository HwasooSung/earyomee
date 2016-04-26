'use strict';

var express = require('express')
  , bodyParser = require('body-parser')
  , routes = require('./lib/routes/all')
  ;
  
var app = express();

app.use('/api', routes);

  
app.listen(8888, function () {
    console.log("listening on 8888");
    });