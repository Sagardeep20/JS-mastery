let p = document.querySelector("p")
p.innerHTML = "<b>Updated </b> by JS"
console.log(p);

let image = document.querySelector("img")
image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVRPoK8lKAGRGuJlyxVjFAtEeoLnv12PkBgg&s")

let ul = document.querySelector("ul")
let lis = document.createElement("li");
lis.textContent = "GUAVA";
ul.appendChild(lis)

