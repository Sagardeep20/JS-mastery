//Q-1>whats the difference between function declaration and function expression in terms of hoisting?

// function declaration is hoisted but function expression is not hoisted.
/*
abcd();
value();

function abcd(){
    //function declatration is hoisted
    console.log("Hoisting");   
}

let value  = function ab(){
    console.log("Hello");
}
*/

//Q3> convert this to arrow func
function multiply(a,b){
    return a*b;
}
// console.log(multiply(2,4));

let multiplication = (a,b)=>{
    return (a*b);
}
// console.log(multiplication(2,9));

//Q-8 use ... oprator to sum up

function getsum(...values){
    console.log(values);
    let total = 0;
    for(let i=0; i<values.length; i++){
        total += values[i];
    }
    console.log(total);
    
}

// getsum(1,2,3,4,5);

let a = function sayHello(){
    console.log("hello");
    return function inner(){
        console.log("Inside hello");
    }
}

// console.log(a()());

function outer(){
    let count = 0;
    return function inner(){
        count++;
        console.log(count);
    };
}

let counter = outer();
counter();//1
counter();//2
counter();//3

//convert this function to IFEE

function init(){
    console.log("Initilised");
}

// console.log(init());
(
function init(){
    console.log("init");   
}
)();


//what will be the o/p of this code and why?

// take();

// var take = function greet(){
//     console.log("Hello");
// }


function discount(discount){
    return function (price){
        return (price - (price*(discount/100)));
    }
}

let pricevalue = discount(10);
console.log(pricevalue(200));

//closures example

function cou() {
    let coun = 0;

    return function() {
        return ++coun;
    };
}

const c1 = cou();
const c2 = cou();

console.log(c1());//1
console.log(c1());//2
console.log(c2());//1