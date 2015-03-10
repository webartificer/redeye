var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

// Require mongoose
var mongoose = require('mongoose');

// Connect to a database
// mongoose.connect('mongodb://localhost/movies');
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds033217.mongolab.com:33217/heroku_app34743783');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

var port = process.env.PORT || 8080;
var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
