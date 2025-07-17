// array

const myArr = [0, 1, 2, 3, 4, 5]
const myCartton = ["Shinchan", "Ninja"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)  //push used to add the value
// myArr.pop()    //pop used to remove last value

myArr.unshift(7)  //used to print value in first
myArr.shift() 

// console.log(myArr.includes(9)); // give false becaz 9 is not exist in given data
// console.log(myArr.indexOf(3));  // to kn where its located

const newArr = myArr.join() // its auto convert in bind & in string

// console.log(myArr);
// console.log(typeof newArr);


// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("b", myArr);

const myn2 = myArr.splice(1,3)
console.log("c", myArr);
console.log(myArr2);







