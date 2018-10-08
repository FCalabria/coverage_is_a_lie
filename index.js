module.exports = {
  addStringified: function(stringsArray) {
    return stringsArray
    .map(function(numString) {
      return parseInt(numString, 10)
    })
    .reduce(function(prev, current) {
      return prev + current;
    });
  }
};
