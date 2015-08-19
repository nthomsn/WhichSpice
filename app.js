var express = require('express');
var hbs = require('hbs');

var app = express();
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/search', function(req, res) {
  // res.send(req.query.q);

  res.render('search', {
    'spices': [
      { 'name': 'Pep', 'percentage': 80},
      { 'name': 'Salt', 'percentage': 67}
    ],
    'title': 'Search results'
  });

});

app.listen(3000);
