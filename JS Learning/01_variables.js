const accountId = 123456
let accountMail = "qwer@g.com"
var accountPass = "1234"
accountCity = "Mumbai"
let accountPin;

accountMail = "asd@g.com"
accountPass = "5678"
accountCity = "Hyderabad"

console.log(accountId);
console.table([accountId, accountMail, accountPass, accountCity, accountPin]);

/*
not to use var as it is function scoped and can be redeclared and updated.
and bcz of issue in block scope and fumctional scope, it is not recommended to use var.
*/