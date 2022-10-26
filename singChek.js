function chek(numone, numtwo, numtree) {
  let type = "";
  if (numone * numtwo * numtree < 0) {
    type = "Negative";
  } else {
    type = "Positive";
  }
  console.log(type);
}
chek(
  -6,

  -12,

  14
);
