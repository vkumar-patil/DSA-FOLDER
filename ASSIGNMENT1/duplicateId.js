//duplicate/ array identify/
const arr1 = [7, 1, 5, 3, 1, 7];
const arr2 = [9, 1, 2, 0, 4, 5];
function hasDuplicates(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(hasDuplicates(arr1));
console.log(hasDuplicates(arr2));
