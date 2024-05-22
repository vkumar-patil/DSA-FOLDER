//palindrome//
const str = "madam";
let show = "true";
for (i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    show = "fals";
  }
}
console.log(`${show}`);
