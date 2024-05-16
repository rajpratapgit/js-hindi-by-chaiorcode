const user = {
    username: "Raj",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function(){
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    // console.log(this);
}
}

// console.log(user.username);
// console.log(user.getUserDetails());

function Users(username, loginCount, isLoggedIn){
    this.username = username 
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new Users("raj", 12, true)
const userTwo  = new Users("rajpratap", 6, true)

console.log(userOne.constructor);
console.log(userTwo);

