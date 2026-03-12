let arr = ["Apple" , "Banana"];
console.log(arr);

//Replace Banana  with kiwi
arr[1] = "kiwi";
console.log(arr);

//Remove the last item from this array using aa method
let numbers = [1,2,3,4];
numbers.pop();
console.log(numbers);

//Insert "Red" & "Blue" at idx 1 in ths array
let colors = ["Green","yellow"]
colors.splice(1,0,"Red","Blue")
console.log(colors);

//use map to squre each el and store it
let op = [1,2,3,4];
let newop = op.map((values) => {
    return (values*values);
})
console.log(newop);

//use .filter to keep numbers greater than 10;
let arr1 = [5,12,8,20,3]
let newarr1 = arr1.filter((values) => {
    if(values > 10)return true;
    else return false;
})
console.log(newarr1);

let newarr2 = arr1.map((value) => {
    if(value > 10)return value;
    
})
console.log(newarr2);

//Use .reduce to find the sum of this arr
let array = [10,20,30]
let sum = array.reduce((total, value) => {
    return total + value;
}, 0)
// console.log(sum);


