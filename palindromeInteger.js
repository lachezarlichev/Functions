function palindrome(array) {
  let optionA = "";
  let optionB = "";

  for (let i = 0; i < array.length; i++) {
    optionA = array[i].toString();
    optionB = "";

    for (let y = 0; y < optionA.length; y++) {
      let currentChar = optionA[y];
      optionB = currentChar + optionB;
    }
    if (optionA == optionB) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
palindrome([123, 323, 421, 121]);
