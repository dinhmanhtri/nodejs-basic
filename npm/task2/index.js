const _ = require("js-good-function");
const arr = [34, 45, 24, 24, 54, 34, 657];

const checkElementExist = _.checkElementExist(arr, 1); // false
const randomElement = _.randomElement(arr); //
const removeDuplicates = _.removeDuplicates(arr); // [ 34, 45, 24, 54, 657 ]

console.log(checkElementExist);
console.log(randomElement);
console.log(removeDuplicates);


