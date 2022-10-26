function oddAndEvenSum(number) {
  let num = number.toString();
  let resultOfOdd = 0;
  let resultOfEven = 0;
  for (let i = 0; i < num.length; i++) {
    let currentNumber = Number(num[i]);
    if (currentNumber % 2 === 0) {
      resultOfEven += currentNumber;
    } else if (currentNumber % 2 != 0) {
      resultOfOdd += currentNumber;
    }
  }
  console.log(`Odd sum = ${resultOfOdd}, Even sum = ${resultOfEven}`);

}
oddAndEvenSum(1000435);
