// var valueThree = 100

let valueOne = 100
if (true) {
  let valueOne = 10;
  const valueTwo = 20;
  // var valueThree = 30;

  console.log("Inner Value : ", valueOne); // Inner Value :  10
}

// console.log(valueOne); // error
// console.log(valueTwo); // error
// console.log(valueThree); // 30 🫢 do not use var not a good practice

console.log("Outer Value: ", valueOne); // Outer Value:  100
