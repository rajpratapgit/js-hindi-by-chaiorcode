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

// console.log(loginUserMessage("Raj")); // Raj just logged in
// console.log(loginUserMessage()); // max just logged in


// function calculateCartPrice(...num1){
//   return num1
// }

// console.log(calculateCartPrice(100,400,5000)); // [ 100, 400, 5000 ]

function calculateCartPrice(val1, val2, ...num1){
  return num1
}

console.log(calculateCartPrice(100, 200, 400, 5000)); // [ 400, 5000 ]

const user = {
  username: "Raj",
  fullName: "Raj Pratap"
}

function handleObject(anyObject) {
  console.log(`username is ${anyObject.username} and fullname is ${anyObject.fullName}`)  
}

// handleObject(user) // username is Raj and fullname is Raj Pratap

handleObject({
  username: "Max",
  fullName: "Maxwell"
})

const myArr = [100,200,300,400]

function returnSecondValue(getArray){
  return getArray[1]
}

console.log(returnSecondValue(myArr)); //200

