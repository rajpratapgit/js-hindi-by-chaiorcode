// object constructor method

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Lord"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "lord@gmail.com",
    fullname: {
        userfullname:{
            firstName: "Raj",
            lastName: "Pratap"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName); // Raj

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2) // good syntax in production

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "raj@google.com"
    },
    {
        id: 1,
        email: "raj@google.com"
    },
    {
        id: 1,
        email: "raj@google.com"
    }
]

users[0].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ] give output as array
// console.log(Object.values(tinderUser)); // [ '123abc', 'Lord', false ]

// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Lord' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

const course = {
    courseName: "JS by hitesh",
    price: "1000",
    courseInstructor: "Hitesh Sir"
}

// const {courseInstructor} = course
// console.log(courseInstructor); // Hitesh Sir

const {courseInstructor: instructor} = course;
console.log(instructor); // Hitesh Sir

//json

// {
// }

// [
// {}
// {}
// {}
// ]
