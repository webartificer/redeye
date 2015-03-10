var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var http = require('http');
var indexController = require('./controllers/index.js');

// Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://refactoru:refactoru@ds033217.mongolab.com:33217/heroku_app34743783');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.get('/', indexController.index);

// Handlebars
app.engine('hbs', cons.handlebars);
app.set('view engine', 'hbs');

// Set Port
app.set('port', process.env.PORT || 8080);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
