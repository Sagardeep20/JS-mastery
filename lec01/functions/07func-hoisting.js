abcd();
// value();

//can access abcd() before initialization because of hoisting 
// but cant access value because of temporal deadzone
function abcd(){
    console.log("Hello hoisting");
}

// cant access value before initilization -> hoisting cant work if varible in to account
let value = function abcd(){
    console.log("Hello");
}