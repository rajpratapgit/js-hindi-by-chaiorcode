// var valueThree = 100

let valueOne = 100
if (true) {
  let valueOne = 10;
  const valueTwo = 20;
  // var valueThree = 30;

  // console.log("Inner Value : ", valueOne); // Inner Value :  10
}

// console.log(valueOne); // error
// console.log(valueTwo); // error
// console.log(valueThree); // 30 🫢 do not use var not a good practice

// console.log("Outer Value: ", valueOne); // Outer Value:  100

function one(){
  const username = "Raj"

  function two() {
    const website = "youtube"
    console.log(username)
  }
  // console.log(website); // error(website not defined)
  two()
}

one()

if(true){
  const username = "Raj"
  if(username == "Raj"){
    const website = " youtube"
    console.log(username + website);
  }
  // console.log(website) // website not defined
}

// console.log(username); // username not defined



// **********************  intresting  **********************

console.log(addone(5)); // 6
function addone(num) {
  return num + 1
}

// console.log(addtwo(5)); // can not access addtwo before initialization
const addtwo = function (num) {
  return num + 2
}

