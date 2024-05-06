// Truthy and falsy value

const userEmail = "study@api.co";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy values :- false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy value :- "0", 'false', " ", [], {}, function(){}

const myArr = [];
if (myArr.length === 0) {
  console.log("Array is empty");
}

const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10  // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15; // 15
val1 = null ?? 10 ?? 15 // 10
console.log(val1);


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80");