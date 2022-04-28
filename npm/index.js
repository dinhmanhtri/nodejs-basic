const _ = require("underscore");
const numbers = [54, 65, 34, 23, 56, 64];

// Tìm số lớn nhất trong mảng
const maxNumber = _.max(numbers);
console.log(maxNumber); // 65

// Tìm số nhỏ nhất
const minNumber = _.min(numbers);
console.log(minNumber); // 23

// Kiểm tra một giá trị có nằm trong mảng hay không?
console.log(_.contains(numbers, 2));  // false
console.log(_.contains(numbers, 54)); // true
