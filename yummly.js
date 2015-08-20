var request = require('request');

/* API CONFIGURATION INFO
   Uses the environmental variables YUMMLY_APPID and YUMMLY_APPKEY */
var endpointUrl = 'http://api.yummly.com/v1/api/recipes'
var appId = process.env.YUMMLY_APPID;
var appKey = process.env.YUMMLY_APPKEY;

/* Test looking up a recipie */
var logRecipies = function (matches) {
  for (var i = 0; i < matches.length; i++) {
    console.log(matches[i].recipeName);
  }
}
searchRecipies("Steak sandwich", logRecipies);

/* Get recipie results as JSON and use runOnRecipies */
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
