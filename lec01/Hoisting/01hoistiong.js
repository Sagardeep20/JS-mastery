//Hoisting:- jab hum kisi variable ko declare karte hai to wo variable memory me
//  allocate ho jata hai but uska value undefined hota hai. aur jab hum us 
// variable ko use karte hai to wo undefined return karta hai. 
// is process ko hoisting kehte hai. variable do hisso mei tut jata hain declaration & 
// initialization. declaration memory me allocate ho jata hai 
// but initialization nahi hota hai.

/*
var -> hoisiting -> undefined
let -> hoisiting -> X (no value assigned)
const -> hoisiting -> X (no value assigned)

*/
/*
console.log(a); //undefined
var a = 12;
console.log(a); 
*/

console.log(a); //cant access a before initialisation -> accessing in temporal deadzone

let a  = 12;

