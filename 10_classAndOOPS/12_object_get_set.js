const User = {
    _email: "raj@raj.com",
    _password: "abc",
    
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const raj = Object.create(User)
console.log(raj.email);