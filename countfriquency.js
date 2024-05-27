const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
count = {};
arr.forEach((value, index) => {
  if (!count[value]) {
    count[value] = 1;
  } else {
    count[value] = count[value] + 1;
  }
});
console.log(count);
