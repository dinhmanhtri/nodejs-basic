const _ = require("underscore");

const ascendingArray = (arr) => {
  _.sortBy(arr, num => num)
}

module.exports = {
  ascendingArray
}