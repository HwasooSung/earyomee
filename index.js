var express = require('express')
  , bodyParser = require('body-parser')
  , routes = require('./lib/route/posts')
  ;

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', routes);

app.get('/', function (req, res) {
  res.send("Hello This is my 1st page");
});

exports.app = app;

app.listen(8888, function () {
  console.log("Listening on 8888");
});