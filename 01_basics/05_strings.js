const name = "neha"
const repoCount = 03

// console.log(name + repoCount + " value" );

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('neha-pr-com')

// console.log(gameName[0]); //  index is given by us and  the value is printed as output
// console.log(gameName.__proto__); // use to fetch the protoype


// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // convert "neha" to upper case
// console.log(gameName.charAt(3)); // gives us the value if we  give the index
// console.log(gameName.indexOf('h')); // gives us the index of the value

const newString = gameName.substring(0,3)// negative value not allowed
// console.log(newString);

const anotherString = gameName.slice(-2 , 4)// negative value allowed
// console.log(anotherString);

const newStringOne = "  neha   "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove white spaces

const url = "https://neha.com/neh%30prasad"

console.log(url.replace('%30' , '-'));

console.log(url.includes('neha'))
console.log(url.includes('sundar'));

console.log(gameName.split('-'));
