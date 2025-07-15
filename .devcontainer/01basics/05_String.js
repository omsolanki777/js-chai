const name = "Om"
const repoCount = 77

console.log(`Hellow my name is ${name} and my repo count is
     ${repoCount}`);  // `` is called backtext

     
const gameName = new String('OmsTech')

console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4)    //slicing
console.log(newString);

const newStringOne = "    Solanki  "
console.log(newStringOne);
console.log(newStringOne.trim());        // used to remove unwanted Space

const url = "https//om.com/om%777Soalnki"  // For Replace

console.log(url.replace('%777', '-'));


     