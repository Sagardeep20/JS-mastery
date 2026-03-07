//non - primitives stores as a reference dont copy them

let a = [1,2,3,4];
let b = a;

b.pop();


console.log(a);
console.log(b);