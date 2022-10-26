function addAndSubstract(first, second, third) {
  function add(a, b) {
    let sumOftwo = a + b;
    return sumOftwo;
  }
  let sum = add(first, second);

  function substract(sumOftwo, last) {
    return sumOftwo - last;
  }
  let result = substract(sum, third);

  console.log(result);
}
addAndSubstract(23, 6, 10);
