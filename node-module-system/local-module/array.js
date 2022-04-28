// Tính tổng các phần tử trong mảng.
const sumArr = (arr) => {
  let sum = 0;
  for (let element of arr) {
    sum += element;
  }
  return sum;
};

// Lấy ngẫu nhiên giá trị trong mảng.
const randomNumber = (arr) => {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

module.exports = {
  sumArr,
  randomNumber
}



