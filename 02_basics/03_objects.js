// singleton

// object literals

// Object.create  // constructor method this will always create singleton

const mySym = Symbol("Key1");

const JsUser = {
    name: "Raj",
    "full name": "Raj Pratap",
    [mySym]: "myKey1",
    age: 19,
    location: "saharanpur",
    email: "raj@co.in",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.name); // Raj
console.log(JsUser["name"]); // Raj
console.log(JsUser["full name"]); // Raj Pratap // you can not access full name with first method
console.log(JsUser[mySym]); // mykey1

JsUser.email = "raj@google.com"
// Object.freeze(JsUser)  
// you can not change anything in object after using freeze
// JsUser.email = "raj@1.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting()); // Hello JS User undefined
console.log(JsUser.greetingTwo()); // Hello JS User undefined