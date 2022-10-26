









function formateGrade(number) {
  let word = "";
  if (number < 3) {
    word = "Fail";
  } else if (number < 3.5) {
    word = "Poor";
  } else if (number < 4.5) {
    word = "Good";
  } else if (number < 5.5) {
    word = "Very good";
  } else {
    word = "Exellent";
  }
  if (number < 3) {
    console.log(`Fail (2)`);
  } else {
    console.log(`${word} (${number.toFixed(2)})`);
  }
  return number;
}
formateGrade(5.99);

function pass(number){
    if(formateGrade > 4){
        console.log('Bravo');
    }
}
