// Two types of memory

// Stack (Primitive) and Heap (Non-Primitive)


// stack give copy and change in copy
let myName = "Raj"

let anotherName = myName
anotherName = "Pratap"

console.log(myName);
console.log(anotherName);

//heap give reference and change in reference

let userOne = {
    email: "trial@gmail.com",
    mobile: "9999999999",
}

let userTwo = userOne

userTwo.email = "raj@google.com"

console.log(userOne.email);
console.log(userTwo.email);