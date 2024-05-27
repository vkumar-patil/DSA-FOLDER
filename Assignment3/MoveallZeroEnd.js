function allzeroendarray(arr, len) {
  const count = 0;
  for (i = 0; i < len; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }
  while (count < len) {
    arr = arr[count++] = 0;
  }
}
let arr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
allzeroendarray(arr, arr.len);
console.log(`${arr}`);
