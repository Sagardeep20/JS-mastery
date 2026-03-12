let arr = [23,8,1,9,12]
let val = arr.sort(function (a,b){
    return b-a;
});
console.log(val);

console.log(arr);
let total = 0;
arr.forEach((values) => {
    total += values;
})
console.log(total);

let toatl2 = 0;
for(let i=0;i<arr.length;i++){
    toatl2 += arr[i];
}
console.log(toatl2);




