// Q->1)))
// function outer() {
//     let x = 10;

//     return function () {
//         x++;
//         console.log(x);
//     };
// }

// const fn1 = outer();
// const fn2 = outer();

// fn1(); // ? 11
// fn1(); // ?  12
// fn2(); // ? 11

//Q-2))
/*
let count = 0;

function outer() {
    return function () {
        count++;
        console.log(count);
    };
}

const a = outer();
const b = outer();

a(); // ? 1
b(); // ? 2
a(); // ? 3 as count is global , so all are access

*/
/*
function outer() {
    // let x = 5;

    return function inner() {
        console.log(x);
    };
}

let x = 100;


const fn = outer();
fn(); // ? 5
*/
/*
function outer() {
    let arr = [];

    return function (val) {
        arr.push(val);
        console.log(arr);
    };
}

const fn = outer();

fn(1); // ? [1]
fn(2); // ? [1,2]
fn(3); // ? [1,2,3]
*/

// for(let i=0;i<=3;i++){
//     // setTimeout(function (){
//     //     console.log(i)
//     // },(i*1000))
//     // setTimeout(()=> console.log(i), (i*1000));

// }

// function x(){
//     for(var i=0;i<=3;i++){
//         function closure(value){
//             setTimeout(() => {
//                 console.log(value);
//             }, (value*1000));

//         }
//         closure(i);
//     }
// }
// let ans = x();

/*
function outer(){
    let x = 1;
    return function (){
        x = x*2;
        return function (){
            console.log(x);
        }
    }
}
let fn  = outer();
let a = fn();
let b = fn();

a();
b();
// let fn = outer()()();
*/

