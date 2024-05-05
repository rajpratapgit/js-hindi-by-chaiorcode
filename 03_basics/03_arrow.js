const user = {
    username: "Raj",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Little"
// user.welcomeMessage()
// console.log(this); // {} empty object

// function code() {
//     let username = "Raj"
//     console.log(this.username); // undefined 
// }
// code()

// const code = () => {
//     let username = "Raj"
//     console.log(this); // {}
// }
// code()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5,5));

// const addTwo = (num1, num2) =>  num1 + num2 
// console.log(addTwo(5, 5));

// const addTwo = (num1, num2) =>  (num1 + num2) // return not needed when we use paranthesis
// console.log(addTwo(5, 5));

const addTwo = (num1, num2) =>  ({username: "raj"})
console.log(addTwo(5, 5));
