class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const chai = new Teacher("raj", "raj@example.com", "123")

chai.addCourse()

const nativeChai = new User("Raj")

nativeChai.logMe()

console.log(chai instanceof User);