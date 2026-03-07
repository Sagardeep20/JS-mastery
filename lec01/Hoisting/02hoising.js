/*
console.log(name); //undefined
var name  ="harsh";
*/

// console.log(age); //cant access before initialization
// let age = 25;

// var -> concept of temporal dead zone happen
// let -> NO concept of temporal dead zone happen -> before initialization cant access

// var doesnot respect block only respect function

var x = 1; //global
{
    var x = 2;//global  override it
}

console.log(x);

var x = 5;
function change(){
    var x = 7; //functional 
}
console.log(x);

// const doest not allow re assigning but inside object can update value

const person = {name:"Harsh"};
person.name = "sharma";
console.log(person.name);

person = {}; // X cant do




