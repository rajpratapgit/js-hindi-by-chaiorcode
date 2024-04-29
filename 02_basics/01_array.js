// Array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["IronMan", "BatMan", "SpiderMan"];

console.log(myArr[0]); // 0
const mySecondArr = new Array(1, 2, 3, 4, 5);

myArr.push(6);
myArr.push(7);
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6, 7 ]
myArr.pop(); // we do not pass any argument in pop it automatically removes last element present in array
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6 ]

myArr.unshift(15); // it add element at the beggining of an array (not a good practice)
console.log(myArr); // [ 15, 0, 1, 2, 3, 4, 5, 6 ]

myArr.shift(); // it is same as pop except it removes element from starting of an array
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6 ]

console.log(myArr.includes(7)); // false
console.log(myArr.indexOf(2)); // 2

const newArr = myArr.join(); // join() adds all the element into string
console.log(newArr); // 0,1,2,3,4,5,6
console.log(typeof newArr); // string

// slice, splice

console.log("A ", myArr); // A [ 0, 1, 2, 3, 4, 5, 6 ];
const myn1 = myArr.slice(1, 3); // slice take index and print them it will print 1th and 2nd index element but not 3
console.log(myn1); // [ 1, 2 ]
console.log("B ", myArr); // B [ 0, 1, 2, 3, 4, 5, 6 ];

const myn2 = myArr.splice(1, 3); // splice printd all the given index including last index given
console.log(myn2); // [ 1, 2, 3 ]
console.log("C ", myArr); // C  [ 0, 4, 5, 6 ] our original array changes if we use splice
// using splice will remove the given index element from original array