let arr = [1,2,3,4]
// let newarr = arr; //use as reference by default. so change one will reflec other
let newarr = [...arr] // spread operator does not use reference by default,
//  change in one will not reflect on other

console.log(arr);
console.log(newarr);

newarr.pop();

console.log(arr);
console.log(newarr);

//spread operator-==> for func and obj ==> dont store as reference , so i change one & will not reflect on other
let obj = {
    name: "Harsh",
    age: 20,
    surname: "Jha",
    address: {
        city:"Delhi",
    }
}

let newobj = {...obj}; // spread dont take as a copy ==> both are independent

console.log(obj);
console.log(newobj);

newobj.name = "Lala";
newobj.address.city = "Bhopal"; // for nesting object --> spread operator does not work, it will use reference for nested object

console.log(obj);
console.log(newobj);
