// var express = require('express');
// var bodyParser = require('body-parser');
// var indexController = require('./controllers/index.js');

// Require mongoose
var mongoose = require('mongoose');

// Connect to a database
// mongoose.connect('mongodb://localhost/movies');
mongoose.connect('mongodb://refactoru:refactoru@ds033217.mongolab.com:33217/heroku_app34743783');

// var app = express();
// app.set('view engine', 'underscore');
// app.set('views', __dirname + '/views');
// app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({extended: false}));
//
// app.get('/', indexController.index);





var express = require('express');
var http = require('http');
var app = express();

// The `consolidate` adapter module
var cons = require('consolidate');

app.set('port', process.env.PORT || 8080);
// app.set('views', './views');
// var port = process.env.PORT || 8080;
// var server = app.listen(port, function() {
// 	console.log('Express server listening on port ' + server.address().port);
// });

// .hbs files should be handled by `handlebars`
// `consolidate` takes care of loading `handlebars` and interfacing it with Express
app.engine('hbs', cons.handlebars);

// we set 'hbs' as the default extension of template files
// this is optional, but you have to specify the view files's extension if you don't
// it defaults to 'jade'
app.set('view engine', 'hbs');

app.get('/', function(res, res) {
  res.render('index', {
    title: 'Project Redeye'
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
