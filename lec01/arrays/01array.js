let arr = [1,2,3,4]

arr.push(8);  // [1,2,3,4,8]
console.log(arr);

// arr.pop();

// arr.reverse();

// arr.shift();//remove the el from the starting idx
// arr.unshift(8); // push el at styarting id 

arr.splice(1,3) //[1,8] [starting idx,how many ele to reove]


let array = [1,2,3,4,5]
let newarr = array.slice(1,4) // index 1 to index 3 copy to newarr
console.log(array);
console.log(newarr);
