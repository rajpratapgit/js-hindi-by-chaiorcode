function sayMyName() {
  console.log("R");
  console.log("A");
  console.log("J");
}

// sayMyName()

function addTwoNumbers(number1, number2) {
  // console.log(number1 + number2);
}
function addTwoNumbersAgain(number1, number2) {
  // let add = number1 + number2
  // return add
  return number1 + number2;
}

// addTwoNumbers(5,10) // 15
// addTwoNumbers(5,"10") // 510
// addTwoNumbers(5,"a") //5a

const result = addTwoNumbers(5, 12); //17
// console.log("Result: ",result); // Result: undefined

const add = addTwoNumbersAgain(5, 12);
// console.log("Result: ",add); // Result:  17

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username")
//         return
//     }
//     else{
//     return `${username} just logged in`
//     }
// }

// console.log(loginUserMessage("Raj")); // Raj just logged in
// console.log(loginUserMessage()); // please enter a username

function loginUserMessage(username = "max") {
  return `${username} just logged in`;
}

console.log(loginUserMessage("Raj")); // Raj just logged in
console.log(loginUserMessage()); // max just logged in
