class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const raj = new User("raj")
// console.log(raj.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const apple = new Teacher("iphone", "i@apple.com")
apple.logMe()