function Counter() {
  this.array = new Array();
}

Counter.prototype.count = function(key) {
  if (!this.containsKey(key)) {
    this.array[key] = 1;
  } else {
    this.array[key]++;
  }
}

Counter.prototype.getCount = function(key) {
  if (!this.containsKey(key)) {
    return undefined;
  }
  return this.array[key];
}

Counter.prototype.containsKey = function(key) {
  return key in this.array;
}

module.exports = Counter;
