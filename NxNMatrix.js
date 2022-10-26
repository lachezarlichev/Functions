function matrix(number) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    let result = "";
    for (let k = 1; k <= number; k++) {
      result += `${number} `;
    }
    arr.push(result);
  }
  console.log(arr.join("\n"));
}
matrix(3);
