var counter = require('./counter.js');

var countableIngredients = ['salt', 'pepper']

function ingredientCounter() {
  this.count = new counter();
  this.recipiesCounted = 0;
}

ingredientCounter.prototype.countRecipie = function(ingredients) {
  for (var i = 0; i < countableIngredients.length; i++) {
    for (var j = 0; j < ingredients.length; j++) {
      if( ingredients[j].indexOf(countableIngredients[i]) > -1 ) {
        this.count.count(countableIngredients[i]);
        break;
      }
    }
  }
  this.recipiesCounted++;
}

ingredientCounter.prototype.getFormattedArray = function() {
  var array = [];
  for (var ingredient in this.count.array) {
    var percent = this.count.getCount(ingredient) / this.recipiesCounted;
    var percent = percent*100;
    array.push({name: ingredient, percentage: percent});
  }
  return array;
}

module.exports = ingredientCounter;
