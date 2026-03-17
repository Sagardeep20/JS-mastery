// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function val(){
//             console.log(i);
            
//         }, i*1000);
//     }
//     console.log("Namste JS");
// }

//Each time we are passing new value wrapped inside closure()
//  which take diff block of memory not the same one, 
// which was taken by closure if we want to keep this 
// with var (as var is non-block scope and for let this problem generally dont come as let is block scope so each time new variable create dont us ethe reference variable)

// function x(){
//     for(var i=1;i<=5;i++){
//         function closureuse(value){
//             setTimeout(function (){
//                 console.log(value);
//             }, value*1000);
//         }
//         closureuse(i);
        
//     }
//     console.log("Namste JS");
// }

function x(){
    for(var i=1;i<=5;i++){
        function closure(value){
            setTimeout(function (){
                console.log(value);
            },(value*1000));
        }
        closure(i);
    }
    console.log("Namaste JS");
}
x();
