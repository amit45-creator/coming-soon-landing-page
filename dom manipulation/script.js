let newBtn = document.createElement("buttton");
newBtn.innerText='click me!';

newBtn.style.color="white";
newBtn.style.backgroundColor="red";

document.querySelector("body").prepend(newBtn);


//q2
let para=document.querySelector("p");
para.getAttribute("class");
para.setAttribute("class","newclass");