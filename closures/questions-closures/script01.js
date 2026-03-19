//QUESTION - 1
/*
function outer() {
    let x = 0;

    return function () {
        x++;
        let y = x;

        return function () {
            console.log(x, y);
        };
    };
}

const fn = outer();

const a = fn(); // [1,1]
const b = fn(); //[2,2]

a(); // ? as x forms closures and y not [2,1]
b(); // ? [2,2]
*/

//QUESTION-2
/*
function outer() {
    let x = 10;

    return function inner() {
        x++;
        console.log(x);
    };
}

let fn = outer();

fn(); // ? 11
fn = outer(); // new call → new closure → fresh x
fn(); // ? 11
*/
/*
function x(){
    let val = 10;
    return function (){
        val++;
        return function (){
            val = val*2;
            return function (){
                console.log(val);
            }
        }
    }
}

let fn = x(); 
let a = fn(); 
let b = fn(); 
a()(); 
b()(); */

/*
function outer() {
    let obj = { val: 1 };

    return function () {
        obj.val++;  //val = 2
        console.log(obj.val);
    };
}

const fn1 = outer(); //{val : 2}
const fn2 = outer(); // {val : 2}

fn1(); // ? {2}
fn1(); // ? {3}
fn2(); // ? {2}
fn2(); // ? {3} */

/*
function counter() {
    let x = 0;

    return {
        inc: function () {
            x++;
        },
        log: function () {
            console.log(x);
        }
    };
}

const c = counter();

c.inc();
c.inc();
c.log(); // ?
*/

/*
function outer() {
    let x = 0;

    return function () {
        x++;
        return () => console.log(x);
    };
}

const fn = outer();

const a = fn();
const b = fn();

a(); // ?
b(); // ?
*/

function outer() {
    let x = 1;

    return function () {
        x++;
        return function () {
            x++;
            console.log(x);
        };
    };
}

const fn = outer();

const a = fn(); // x = 2

const b = fn(); // x = 3

a(); // 4
b(); // 5