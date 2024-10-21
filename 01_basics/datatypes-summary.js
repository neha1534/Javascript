//# Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

// const bigNumber = 3456781298863772n



// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj= {
    name: "neha",
    age: 21,
}

const myfunction = function(){
    // console.log("Hello world");
} 

// console.log(typeof heros);





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-primitive)

let myYoutubename = "nehadotcom"

let anothername = myYoutubename
anothername = "Chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "neha@google.com"

console.log(userOne.email);
console.log(userTwo.email);

