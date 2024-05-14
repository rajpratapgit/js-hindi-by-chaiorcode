const promiseOne = new Promise((resolve, reject) => {
    // Does Async tasks
    // DB calls, cryptography, network calls,
    setTimeout(() => {
        console.log("Async task is complete");
        resolve()
    }, 1000)
})
promiseOne.then(() => {
    console.log("Promise consumed");
})



new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task two");
        resolve()
    }, 1000)
}).then(() => {
    console.log("Async two resolved");
})



const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "Raj", email: "raj@raj.com"})
    }, 1000)
})
promiseThree.then((user) => {
    console.log(user); 
})



const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({ username: "Raj", email: "raj@example.com" });
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
const username = promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Finally the promise is either resolved or rejected");
})



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true
      if (!error) {
        resolve({ username: "javascript", email: "js@example.com" });
      } else {
        reject("ERROR: JS went wrong");
      }
    }, 1000);
})
async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('E: ', error);
    }
}

// getAllUsers()


fetch("https://api.github.com/users/rajpratapgit").then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("Error");
})