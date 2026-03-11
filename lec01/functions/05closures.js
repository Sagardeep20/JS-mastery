// closure ->  ek aisa function jo return krta hain ek function, 
// and us return function me parent function ka attributes/variable use hota hain

function outer(){
    let a  = 5;
    return function(){
        a++;
        console.log(a);
    }
}

let counter = outer();
counter();
counter();
counter();