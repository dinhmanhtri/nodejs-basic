const generator = require('generate-password');

let passwords = generator.generateMultiple(5, {
  length: 15,
  uppercase: true,
  lowercase: false, 
  numbers: true,
  symbols: true
});

console.log(passwords);