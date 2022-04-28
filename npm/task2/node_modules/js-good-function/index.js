const checkElementExist = (arr, number) => {
  for (const element of arr) {
    if (element === number) {
      return true;
    }
  }
  return false;
}

const randomElement = (arr) => {
  let item = arr[Math.floor(Math.random() * arr.length)];
  return item;
}

const removeDuplicates = (arr) => {
  let ans = arr.filter((value, index, arr) => arr.indexOf(value) === index);
  return ans;
}

module.exports = {
  checkElementExist,
  randomElement,
  removeDuplicates
}