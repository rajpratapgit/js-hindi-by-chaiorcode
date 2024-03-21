const value = 100
console.log(value);

const fixNum = new Number(100)
console.log(fixNum);

console.log(fixNum.toString());
console.log(fixNum.toFixed(2));

const otherNum = 38.479443

console.log(otherNum.toPrecision(3));


const tooManyZeros = 10000000
console.log(tooManyZeros.toLocaleString('en-IN'));


// ******************* Maths ******************

console.log(Math);
console.log(Math.abs(-39)); //changes negative value to positive values
console.log(Math.round(5.3));  // gives round-off value // 5
console.log(Math.round(5.6)); // 6
console.log(Math.ceil(5.3)); // choose upper number // 6
console.log(Math.floor(5.6)); // choose lower value // 5
console.log(Math.min(5,4,3,2,4,77,442,13,33,1)); // give minimum value from array
console.log(Math.max(5,4,3,2,4,77,442,13,33,1)); // give maximum value from array

console.log(Math.random()); // give random value everytime between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);