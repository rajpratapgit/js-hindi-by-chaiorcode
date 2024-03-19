const name = "Raj"
const repoCount = 5


// not good practice
// console.log(name + repoCount + " Pratap");

//use this instead

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Racing-Chai")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('g'));


const newString = gameName.substring(0, 6)
console.log(newString);  // Racing

let anotherString = gameName.slice(-10, 6)
console.log(anotherString);  // acing


const noobUserString = "   raj   "
console.log(noobUserString);
console.log(noobUserString.trim());

const url = "https://raj.com/rajdata%80pratap"

console.log(url.replace('%80', '-'))
console.log(url.includes('raj'))

console.log(gameName.split('-'));
