// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol,BigInt

const score = 100      // Number
const scoreValue = 100.3  

const isLoggedIn = false  // Boolearn
const outsideTemp = null  // null
let userEmail;      // undefined

const id = Symbol('123')           // Symbol
const anotherId = Symbol('123')

console.log(id === anotherId)


// Reference (Non primitive)

// Array, Object, Functions

const classmates = ["Divya", "pakiya", "kalios"];  //Array

let myObj = {                //object (its always writtern in {})
    name: "Solanki",
    age: 23,
}

const myFunction = function(){          // Fuctions
    console.log("Skyllax Banglore");
}

console.log(typeof classmates);




//********************** Memory ******************

// Stack (Primitive), Heap (Non-Primitive)

let myLaptopname = "AcerNitro"

let anothername = myLaptopname
anothername = "HpPavillion"

console.log(myLaptopname);
console.log(anothername);

let userOne = {                      // Heap Ex.
    email: "user@goole.com",
    upi: "user@sbi"
}

let userTwo = userOne

userTwo.email = "Omsolanki@google.com"

console.log(userOne.email);
console.log(userTwo.email);


// In heap which things goo is in a reference only its does not replace 

// In Stack the values return in Copy formate only