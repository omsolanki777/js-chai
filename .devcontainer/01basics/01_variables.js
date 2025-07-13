const accountID = 777
let accountEmail = "omsolanki@gmail.com"
var accountPassword = "12345"
accountCity = "Gujarat"

// accountID = 2 // it not allowed becz const cannot be change

accountEmail = "Divya@gmail.com"
accountPassword = "54321"
accountCity = "Banglore"

console.log(accountID);

/* 
prefer not use var
beacause of issue in block and function scope
*/

console.table([accountID, accountEmail, accountPassword,accountCity])