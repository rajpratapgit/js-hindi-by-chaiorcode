let score = "33"
let score2 = "33abc"

console.log(typeof score);
console.log(typeof score2);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

// "33" => 33
// "33abc" => NaN (Not an Number)
// undefined => NaN (Not an Number)
// null => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false; "Raj" => true
