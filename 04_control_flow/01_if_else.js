// 

const isUserLoggedIn = true
const temprature = 40

if(temprature < 50){
    console.log("Temprature is less than 50");
}
else{
    console.log("Tempratur is greater than 50");
}
// <, >, <=, >=, ==, !=, ===, !== (=== also checks data type)

const score = 200

if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
}

const balance = 1000

// if(balance > 500) console.log("test"); // immature code (not a good practice)

// if(balance < 500){
//     console.log("Less than 500");
// }
// else if(balance < 750){
//     console.log("Less than 750");
// }
// else if(balance < 900){
//     console.log("Less than 900");
// }
// else{
//     console.log("Less than 1200");
// }


const userLoggedIn = true
const  debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2)
{
    console.log("Allow to buy corses");
}

if(loggedInFromEmail || loggedInFromEmail){
    console.log("User Logged In");
}