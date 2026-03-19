// let p = document.querySelector("p");
// p.addEventListener("dblclick", function () {
//     p.style.color = "green";
// });

let inp = document.querySelector("input");
inp.addEventListener("input",function (details){
    if(details.data !== null){
        console.log(details);
    }
})

let sub = document.querySelector("button")

sub.addEventListener("click",function (details,cnt){
    
    console.dir("You have clicked");
    
})