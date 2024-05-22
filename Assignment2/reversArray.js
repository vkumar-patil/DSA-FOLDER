//revers array//
let array = [1, 2, 3, 4, 5];
function reverseArray(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}
let reversedArray = reverseArray(array);
console.log(array);
console.log(reversedArray);
