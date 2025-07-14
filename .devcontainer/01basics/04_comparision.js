console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);   // != means not equal to


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);    // >      
console.log(null == 0);   // >  //avoid this type of comparisions
console.log(null >= 0);   // >

console.log(undefined == 0);  // >
console.log(undefined > 0);   // >  //avoid this type of comparisions    
console.log(undefined < 0);   // >


// === is strict

console.log("2" === 2);