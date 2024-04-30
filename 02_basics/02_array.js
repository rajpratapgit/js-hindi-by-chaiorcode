const marvel_heroes = ["IronMan", "Thor", "SpiderMan"];
const dc_heroes = ["BatMan", "SuperMan", "Flash"];

//marvel_heroes.push(dc_heroes);

//console.log(marvel_heroes); 
// ['IronMan','Thor','SpiderMan',[ 'BatMan', 'SuperMan', 'Flash' ]]

//console.log(marvel_heroes[3][0]); 
// BatMan (not a good syntax)

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);
// [ 'IronMan', 'Thor', 'SpiderMan', 'BatMan', 'SuperMan', 'Flash' ]

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);
// [ 'IronMan', 'Thor', 'SpiderMan', 'BatMan', 'SuperMan', 'Flash' ]

const another_array = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]

const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array); // [1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("Raj")); // false
console.log(Array.from("Raj")); // [ 'R', 'a', 'j' ]
console.log(Array.from({name: "Raj"})); // intresting for interview []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]