// for of loop

// ["", "", ""]
// [{}, {}, {}]

const myArr = [1,2,3,4,5]

for (const num of myArr) {
    console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    if(greet==" ")
    {
        continue;
    }
    else
    {
    console.log(`Each char is ${greet}`);
    }
}

// Maps

const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set("In", "India"); // this will not go into map bcz map are known for unique  value
console.log(map);

for (const [key, value ] of map) {
    console.log(key, ":-", value);
}

const myObject = {
    gameOne: "NFS",
    gametwo: "SpiderMan"
}


// Error
// for (const [key, value] of myObject) { 
//     console.log(key, ":-", value);
// }



