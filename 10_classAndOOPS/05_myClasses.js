// After ES6 

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("raj", "raj@example.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// What's happening behind the scenes
function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password; 
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const raj = new user("Raj", "raj123@example.com", "123456")
console.log(raj.encryptPassword()); 