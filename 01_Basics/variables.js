const accountId = 10000
let accountEmail = "king@gmail.com"
var accountPassword = "12345678" //we do not use var becausee it have scope problem {}
accountCity = "Delhi"  // not a good practice
let accountState;


// accountId = 1  //const value can not be change not allowed, 1st Investigation

accountEmail = "king1@gmail.com"
accountPassword = "87654321"
accountCity = "Mumbai"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])