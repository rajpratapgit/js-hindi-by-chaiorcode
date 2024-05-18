const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(descriptor);

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

const coffee = {
    name: "Cold Coffee",
    price: "399",
    isAvailable: true,

    orderCoffee: function(){
        console.log("Ordering coffee");
    }
}

console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

Object.defineProperty(coffee, "name", {
    writable: false,
    enumerable: false,
    configurable: false
})

// console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

for (let [key, value] of Object.entries(coffee)) {
    if(typeof value != 'function'){
    console.log(`${key}: ${value}`);
    }
}