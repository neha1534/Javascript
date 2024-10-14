const accountId = 144553
let accountEmail =  "nehaprasad0309@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed 


//{} -> scope

accountEmail = "hc@hc.com"
accountPassword="5454"
accountCity = "UP"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope  
*/ 



console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

