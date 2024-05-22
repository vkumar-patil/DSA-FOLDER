// 5) star print//
function printStarPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log("".repeat(rows - i) + "*".repeat(i));
  }
}

const numRows = 3;
printStarPattern(numRows);
