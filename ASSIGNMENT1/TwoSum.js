//TwoSum//first problem solve
num = [2, 7, 11, 15];
target = 9;
function twoSum(num, target) {
  for (i = 0; i < num.length; i++) {
    for (j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
console.log(twoSum(num, target));

