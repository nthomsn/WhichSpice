var express = require('express');
var hbs = require('hbs');
var blogEngine = require('./blog');

var app = express();
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/search', function(req, res) {
  res.send(req.query.q);
});

app.listen(3000);
