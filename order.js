function oreder(numone, numtwo, operator) {
  switch (operator) {
    case "multiply":
      operator = numone * numtwo;
      break;
    case "divide":
      operator = numone / numtwo;
      break;
    case "add":
      operator = numone + numtwo;
      break;
    case "subtract":
      operator = numone - numtwo;
      break;
  }
  console.log(operator);
}
oreder(
  50,

  13,

  "subtract"
);
