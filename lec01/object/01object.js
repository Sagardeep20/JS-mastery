let obj2 = {
    name: "Sagardeep",
    age: "22",
    email: "sagardeepchoudhry@gmail.com",
}

let ans  = Object.keys(obj2); // make an array of object keys
console.log(ans);

// for(let key in obj){
//     console.log(key,obj[key]);
// }

let obj = {
    name: "Harsh",
    age: 20,
    address: {
        city: "agartala"
    },
}

let newobj = {...obj};
console.log(obj);
console.log(newobj);

newobj.address.city="Bhopal";

console.log(obj);
console.log(newobj);
/// ... spread operatot ->  array obj -> doest not use reference , so i can chage on and it will not reflect to other

/*
let arr = [1,2,3,4]
let newar = [...arr]
console.log(arr);
console.log(newar);

arr.pop();
console.log(arr);
console.log(newar);
*/
