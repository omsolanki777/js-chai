const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));     // used for to make number after 100.00

const otherNumber = 123.8977

console.log(otherNumber.toPrecision(3));  // to give roundup value count .xyz

const hundred = 100000000000

console.log(hundred.toLocaleString());   // to give "," in long numbers
console.log(hundred.toLocaleString('en-In'));  // as India currency type ,


//***********************Maths*********************


console.log(Math.abs(-4));   // its give positive value only
console.log(Math.round(6.7));
console.log(Math.ceil(4.2));   // its give higher not see . is greater or less
console.log(Math.floor(4.9));  //only give lower values
console.log(Math.min(5,2,7,9));
console.log(Math.max(5,2,7,9));

console.log(Math.random());

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
