var request = require('request');
var ingredientCounter = require('./ingredientCounter');

/* API CONFIGURATION INFO
/* Uses the environmental variables YUMMLY_APPID and YUMMLY_APPKEY */
var endpointUrl = 'http://api.yummly.com/v1/api/recipes'
var appId = process.env.YUMMLY_APPID;
var appKey = process.env.YUMMLY_APPKEY;

function searchRecipies(query, runOnRecipies) {
  var queryUrl = endpointUrl + '?_app_id=' + appId + "&_app_key=" + appKey +
  "&q=" + query;

  request(queryUrl, function (err, res, body) {
    if (!err && res.statusCode == 200) {
      var yummlyResponse = JSON.parse(body)
      runOnRecipies(yummlyResponse.matches);
    }
  });
};

function constructRecipieCounter(searchString, runOnCounter) {

  var countRecipies = function (recipies) {
    var counter = new ingredientCounter();
    for (var i = 0; i < recipies.length; i++) {
      var ingredients = recipies[i].ingredients;
      counter.countRecipie(ingredients);
    }
    runOnCounter(counter);
  }

  searchRecipies(searchString, countRecipies);
}

module.exports = constructRecipieCounter;
