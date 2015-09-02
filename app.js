var express = require('express');
var hbs = require('hbs');
var yummly = require('./yummly.js');

var app = express();
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/search', function(req, res) {
  yummly(req.query.q, function(counter) {

    res.render('search', {
      'spices': counter.getFormattedArray(),
      'title': 'Search results',
      'query': req.query.q
    });

  });
});

app.listen(3000);
