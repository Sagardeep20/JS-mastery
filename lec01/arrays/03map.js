let arr = [19,2,36,4,5]

// console.log(arr);

// arr.forEach(function (value){
//     console.log(value);
// });

// map == tabhi use krna jab hume ek naya array banana hain as a copy  pichle array se
//map ==> map sunte hii ek blank array sochna hain, map bilkul foreach ki tarah kam krta hain
let newArr = arr.map(function (value){
    if(value > 10)return "Higher value";
    else return value;
})
console.log(newArr);

