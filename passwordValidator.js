function password(word) {
  let counter = 0;
  let isSymbol = false;

  for (let i = 0; i < word.length; i++) {
    let charNum = word[i].charCodeAt();
    let digityChar = charNum >= 48 && charNum <= 57;
    let smallChar = charNum >= 97 && charNum <= 122;
    let bigChar = charNum >= 65 && charNum <= 90;
    if (digityChar) {
      counter++;
    }
    if (!digityChar && !smallChar && !bigChar) {
      isSymbol = true;
    }
  }
  if (word.length < 6 || word.length > 10) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (isSymbol == true) {
    console.log("Password must consist only of letters and digits");
  }
  if (counter < 2) {
    console.log("Password must have at least 2 digits");
  }
  if (counter >= 2 && !isSymbol && (word.length >= 6 || word.length <= 10)) {
    console.log("Password is valid");
  }
}
password("MyPass123");
