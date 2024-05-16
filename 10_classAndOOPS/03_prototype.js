let myName = "Raj      "
let lastName = "Pratap                   "

console.log(myName.trueLength);

let myHeroes = ["Thor", "Ironman"]

let heroPower = {
    thor: "Hammer",
    ironman: "AI",
    getIronPower: function(){
    console.log(`Ironman power is ${this.ironman}`);
    }
}

Object.prototype.raj = function(){
    console.log(`Raj is present in all objects`);
}

Array.prototype.heyRaj = function(){
    console.log(`Raj says hello`)
}

heroPower.raj()
myHeroes.heyRaj()
// heroPower.heyRaj() // error



// inheritance
const user = {
    username: "Raj",
    email: "raj@example.com"
}

const Teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignments",
    fullTime: true,
    __proto__: teachingSupport
}

Teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(teachingSupport, Teacher)

let anotherUsername = "Raj Pratap        "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"raj".trueLength()
"coldcoffee".trueLength()