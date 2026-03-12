let arr = [1,2,3,4,5,6,7,8];

//filetr ==> takes those values which are true
//map ==> make a blank copy of array and put values in to that array according to the condition
let newarr = arr.filter(function (values){
    if(values > 4)return true;
    else return false;
})
console.log(newarr);


let newArr = arr.map(function (values){
    if(values > 5)return "HIGH";
    else return values;
})

// console.log(newArr);


// arr.forEach(function (values){
//     if(values > 4)console.log(values);
// })

// arr.forEach((values) => {
//     if(values > 5)console.log(values);
    
// })