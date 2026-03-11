let a  = 2;

// impure function = aise func jo apne bahar ke state ko change krta hai
//  ya uske bahar ke state pe depend krta hai
function impure(){
    a++;
    console.log(a);
    
}

function pure(x){
    return x+1;
}

console.log(impure());
