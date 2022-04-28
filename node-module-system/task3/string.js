// Example 1:
const capitalizeString = (string) => {
  return string.toLowerCase().split(' ')
    .map(w => w.substring(0, 1).toUpperCase() + w.substring(1))
    .join(' ');
}

// Example 2:
const repeatString = (string, number) => {
  let arr = [];
  while (arr.length < number) {
    arr.push(string);
  }
  return arr.join("-");
}

// Example 3:
const reverseString = (string) => {
  return string.split("").reverse().join("");
}

// Example 4: 
const isSymmetry = (string) => {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
}

module.exports = {
  capitalizeString,
  repeatString,
  reverseString,
  isSymmetry
}