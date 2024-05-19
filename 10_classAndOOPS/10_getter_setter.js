class User{
    constructor(email, password){
        this.email = email; 
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}raj`
    }

    set password(value){
        this._password = value
    }
}

const raj = new User("raj@example.com", "abc")
console.log(raj.password);
console.log(raj.email);
