//append

let h1 = document.createElement("h1")
h1.textContent = "Hello from VS code"
document.querySelector("body").append(h1);

let a1 = document.createElement("a")
a1.textContent = "Leetcode-profile of mine"
a1.href = "https://leetcode.com/u/Sagardeep20/"

document.querySelector("body").append(a1)
console.dir(a1);


