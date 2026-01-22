// let btn1=document.querySelector("#btn1");

// btn1.onclick=() =>{
//     console.log("btn was clicked");
//     let a=25;
//     a++;
//     console.log(a);//26
// }


// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };


// btn1.addEventListener("click",(evt)=>{
//     console.log("button1 was clicked:");
//     console.log(evt);
//     console.log(evt.type);
// });



let modeBtn=document.querySelector("#mode");
let body =document.querySelector("body");
let currMode ="light";//dark


modeBtn.addEventListener("Click",()=>{
   if(currMode==="light"){
    currMode="dark";
    body.classList.add("dark");
    body.classList.remove("dark");
   
   }  else{
    currMode="Light";
    body.classList.add("light");
    body.classList.remove("dark");
   }

   console.log(currMode);

});