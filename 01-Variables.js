// Lexical Scoping
var i = 1;

(function () {
    console.log(i);
    (function () {
        console.log(i);

        (function () {
            console.log(i);

        })();
    })();
})();


const accountId = 144553
let accountEmail = "waqar@gmail.com"
var accountPassword = "12345"
var accountCity = "Lahore"
let accountState; // if not assigned a value then javascript gives undefined

// accountId = 2 //not allowed

accountEmail = "mehmood@gmail.com"
accountPassword = "67890"
accountCity = "karachi"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// var is a  function scope 
// { } these curly braces are called the scope
// scope is a region of the code where a variable is defined

/*
prefer not use var
because os issue in block scope and function scope
*/


