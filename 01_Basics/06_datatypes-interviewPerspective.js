// Primitive data types

// 7 Types :- String, Number, Boolean, Null, Undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 36732876329458619n

// Reference or (Non - Primitive data types)

// Array, Objects, Functions, 

const heros = ["IronMan","Thor","SpiderMan", "Shaktiman"];

let myObject = {
    name: "Raj",
    age: 19,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);