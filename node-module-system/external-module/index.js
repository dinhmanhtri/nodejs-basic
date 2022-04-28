const uuid = require('uuid');

// Tạo một chuỗi id
const id = uuid.v4();
console.log(id);

// Parse chuỗi id thành mảng các bytes
const bytes = uuid.parse(id);
console.log(bytes);

console.log(uuid.validate("52351343")); // false
console.log(uuid.validate("6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b")); // true