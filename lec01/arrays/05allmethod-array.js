let arr = [1,2,3];
arr.push(4);

console.log(arr); // [1,2,3,4]

//pop
let arr = [1,2,3];
arr.pop();

console.log(arr); // [1,2]


//unshift()
let arr = [2,3];
arr.unshift(1);

console.log(arr); // [1,2,3]

//shift\
let arr = [1,2,3];
arr.shift();

console.log(arr); // [2,3]

//foreach
let arr = [1,2,3];

arr.forEach(num => {
  console.log(num);
});

//map
let arr = [1,2,3];

let doubled = arr.map(num => num * 2);

console.log(doubled); // [2,4,6]

//filter
let arr = [1,2,3,4,5];

let even = arr.filter(num => num % 2 === 0);

console.log(even); // [2,4]

//reduce
let arr = [1,2,3,4];

let sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10

//find
let arr = [10,20,30];

let result = arr.find(x => x > 15);

console.log(result); // 20

//findindex
let arr = [10,20,30];

let index = arr.findIndex(x => x === 20);

console.log(index); // 1

//includes
let arr = [1,2,3];

console.log(arr.includes(2)); // true

//slice
let arr = [1,2,3,4,5];

let part = arr.slice(1,4);

console.log(part); // [2,3,4]

//splice
let arr = [1,2,3,4];

arr.splice(1,2);

console.log(arr); // [1,4]

//sort 
let arr = [5,2,8,1];

arr.sort((a,b) => a-b);

console.log(arr); // [1,2,5,8]

//revrse
let arr = [1,2,3];

arr.reverse();

console.log(arr); // [3,2,1]

//split
let str = "a,b,c";

let arr = str.split(",");

console.log(arr); // ["a","b","c"]

//flat
let arr = [1,[2,3],[4,5]];

console.log(arr.flat());
// [1,2,3,4,5]

//flatmap
let arr = [1,2,3];

let result = arr.flatMap(x => [x, x*2]);

console.log(result);
// [1,2,2,4,3,6]