const arr = [12, 35, 1, 10, 34, 1];
for (i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++) {
    if (arr[i-1] >arr[j]) {
      n = arr[i];
      arr[i] = arr[j];
      arr[j] = n;
    }
  }
}
console.log(n);
