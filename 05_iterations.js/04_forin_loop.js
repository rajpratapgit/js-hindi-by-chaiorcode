// forin loop

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift By Apple"
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["js", "cpp", "ruby", "swift"]

for (const key in programming) {
    console.log(programming[key]);
}

// const map = new Map();
// map.set("In", "India");
// map.set("USA", "United States of America");
// map.set("FR", "France");
// map.set("In", "India"); // this will not go into map bcz map are known for unique  value

// for (const key in map) {
//     console.log(key);
// }