function repear(text, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += text;
  }
  console.log(result);
}
repear("abc", 3);
