//higher order func = vo func jo return kre 
// ek func ko ya phir ek func ko argument ke roop me le sakta hai

// function ask(value){
//     return function newtype(){
//         // console.log("from inside func");
//         return function insideit(){
//             console.log("Telling from inside func 2");
//         }
//     }
// }

// ask()()();

function createMultiplier(x) {
    return function (y) {
        return x * y;
    };
}
let double = createMultiplier(2);
console.log(double(9)); 
