function loading(number) {
let star = number /10
  let result = ``;
  let end = 10;
  for(let k = 0;k<star;k++){
    let current = number[k] = '%'
    result +=current
  }
  for (let i = star; i <end; i++) {
    let current = (number[i] = ".");
    result += current;
  }
  if(number == 100){
    console.log(`100% Complete!`);
  }else if(number >0 && number < 100){

  console.log(`${number}% [${result}] 
  Still loading...`);
  }else{
    console.log(`[%%%%%%%%%%]`);
  }
}
loading();
