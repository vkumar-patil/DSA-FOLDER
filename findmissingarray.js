let arr = [1, 2, 3, 4, 6, 7, 8];
for (let i = 1; i <= arr.length + 1; i++) {
  if (arr.indexOf(i) === -1) {
    console.log(i);
    break;
  }
}
