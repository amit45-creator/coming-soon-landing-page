// let pencilPrice =10;
// let eraserPrice= 5;
// // let output ="the total price is : " +(pencilPrice + ErasorPrice) + "Rupees.";
// let output = `The total price is : ${pencilPrice + eraserPrice } Rupees.`;
// console.log(output);






//  let color ="green";
//  if (color==="red"){
//     console.log("Stop");
//  }
//  if (color==="yellow"){
//     console.log("slow down");
//  }
//  if (color==="green"){
//     console.log("Go");
//  }







//  let size = 'L';
//  if(size=='XL'){
//     console.log(" price is 250 ")
//  }
//  if(size=='L'){
//     console.log(" price is 200 ")
//  }
//  if(size=='M'){
//     console.log(" price is 100 ")
//  }
//  if(size=='S'){
//     console.log(" price is 50 ")
//  }



// let marks =33;
// if (marks>=33){
//     console.log("Pass");
//     if(marks>=80){
//         console.log("Grade:A");
//     }else{
//         console.log("Grade: A");
//     }
// }else{
//     console.log("Better luck next time! ");
// }



// let str ="apple"
// if ((str[0]==='a')&&(str.length>3)){
//     console.log("Good String")
// }



// let day =1;
// switch(day){
//     case 1: 
//     console.log("M");
//     break;
//     case 2: 
//     console.log("T");
//     break;
//     case 3: 
//     console.log("W");
//     break; 
//     case 4: 
//     console.log("T");
//     break;
//     case 5: 
//     console.log("F");
//     break;
//     case 6: 
//     console.log("S");
//     break;
//     case 7: 
//     console.log("Sun");
//     break;
// }



// alert("this is a alert!");
// console.error("error");
// console.warn("warning");




// prompt("enter your name: "); 
// let roll = prompt("enter your roll no: ");
// console.log(roll);



// let firstName = prompt("enter first name");
// let lastName = prompt ("enter last name");
// let msg =" welcome " + firstName + lastName + "!";
// alert(msg);



// let fruits =["mango", "apple", "banana", "orange", "litchi"];
// for (fruit of fruits ){
//     console.log(fruit)
// }
// for (char of "apnacollege"){
//     console.log(char);
// }


// let heroes = [ [ "superman" , "batman", "wonder woman",],["spiderman","ironman", "thor"]];
// for (list of heroes){
//     for (hero of list){
//         console.log(hero);
//     }
// }



// let todo =[];
// let req = prompt("Please enter your request ");
// while (true){
//     if (req=="quit"){
//         console.log("quitting app");
//         break;
//     }
//     if (req=="list"){
//         console.log(" ----------------");
//         for(task of todo){
//             console.log(task);
//         }
//         console.log("-----------------");
//     } else if (req == "add"){
//         let task = prompt("Please enter the task you want to add ");
//         todo.push(tasks);
//         console.log("task added");
//     }else if (req == "delete"){
//         let idx =prompt ("please enter the eask index");
//         todo.splice(idx,1);
//         console.log("task deleteed");
//     }
//     else{
//         console.log("wrong request");
//     }
//     req = prompt("Please enter your request ");
// }



// let student ={
//     name: "shradha ",
//     age: 23,
//     marks: 94.4 
// };



// const post ={
//     username : "@shradhakhapra",
//     content : " This is my # firstPost ",
//     likes: 150,
//     repost: 5,
//     tags : ["@apnacollege ", "@delta"]
// };


// const classInfo = {
//     aman: {
//         grade: "A+",
//         city: "Delhi"
//     },
//     shradha: {
//         grade: "A",
//         city: "Pune"
//     },
//     karan: {
//         grade: "O",
//         city: "Mumbai",
//     }
// };



// let random =Math.floor (matchMedia.random()*10)+1;           //doubt...





// const max =prompt ("enter the max number");
// const random = Math.floor(Math.random()*max)+1;
// let guess = prompt(" guess the number");
// while (true){
//     if (guess=="quit"){
//         console.log("user quit");
//         break;
//     }
//     if (guess==random ){
//         console.log("you are right! congrats !! ",random);
//         break;
//     }
//     else if (guess<random){
//         guess =prompt("your guess was too small . please try again ");

//     }else {
//         guess = prompt ("your guess was too large. please try again ");
//     }
//     // else {
//     //     guess =prompt("your guess was wrong .Please try again ");
//     // }
// }


// function isAdult(){
//     let age = 13;
//     if ( age >= 18){
//         console.log ("adult");
//     }else{
//         console.log ("not adult");
//     }
// }
// isAdult();



// function rollDice (){
//     let rand = Math.floor(Math.random() *6)+1;
//     console.log (rand);
// }
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();


// function printInfo(name,age){
//     console.log(`${name}'s age is  ${age}.`);
// }
// printInfo("amit", 19);
// printInfo(14);



// function sum (a,b){
//     return a+b;

// }
// let s =sum (3,4);
// console.log(s);


// function getSum (n){
//     let sum =0;
//     for (let i=1;i<=n;i++){
//         sum += i;

//     }
//     return sum;
// }/



// let str =["hi", "hello", "bye","!"];
// function concat (str ){
//     let result = "";
// } for (let i =0; i<str.length;i++){
//      return result ;  
// }




// function outerFunc(){
//     let x =5;
//     let y=6;
//     function innerFunc(){ //function scope 
//         let a =10;
//         console.log(x);
//         console.log(y);
//     }
//     console.log (a);
//     innerFunc(); 
// }




// higher order functions
// function multipleGreet(func,count){
//     for (let i=1;k<=count ;i++){
//         func();
//     }
// }                                    // error
// let greet = function(){
//     console.log("hello");
// }

// multipleGreet(greet,10);




// function oddOrEvenFactory (request){
//     if (request =="odd"){
//         return function (n){
//             console.log(!(n%2==0));
//         }
//     }else if(request=="even"){
//         return function(n){
//         console.log(n%2==0);
//     }
// }else {
//     console.log("wrong request");
// }}
// let request ="odd"; //even


// const calculator ={
    
//     add: function(a,b){
//          return a+b;
//     },
//     sub: function (a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b; 
//     }
// }




// const student ={
//     name : "shradha",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy : 97,
//     getAvg(){
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(`${this.namee} got avg marks =#{avg} `);  // direct parameter cannot be access to getavg that's why we use this keyword 
//     }
// }

// function getAvg(){
//     console.log(this);
// }




// console.log("hello");
// console.log("hello");
// // let a =5;
// try {
//     console.log(a);
// } catch(err){("caught an error... a is not defined");
//      console.log(err);
// }
//  console.log("hello2");
//  console.log("hello2");
//  console.log("hello2");


//arrow function 
// const sum = (a,b)=>{
//     console.log(a+b);
// };

// const cube = (n) =>{
//     return n*n*n*;
// };

// const pow =(a,b)=>{
//    return a**b;
// };
 
// const hello = ()=> {
//     console.log("hello world");
// };


// set interval 
// console.log("hi there!");
 
// setTimeout(() =>{
//     console.log("Apna college ");
// },4000);

// console.log("Welcome to");



// console.log("Hi there!");
// let id = setInterval (() => {
//     console.lgo ("Apna College ");
// },2000);

// let id2 = setInterval(() =>{
//     console.log("hello world ");

// },3000);
// console.log(id2);

// console.log(id2);
// clear interval  


//this keyword
// const student = {
//     name: "aman",
//     marks: 95,
//     prop: this, // global scope 
//     getName: function () {
//         console.log(this);
//         return this.marks;
//     },
//     getInfo1:function (){
//         setTimeout(I => {
//             console.log (this ); //student 
//         },2000);
//     },
//     getInfo2: function (){
//         setIimeout(function (){
//          console.log(this); //window
//         },2000);
//     },
// };


// practice question 
//   const square = (n) =>n*n;

//   console.log(square(4))
//  let id = setInterval(() => {
//     console.log("hello world");
//  },2000);
//    setTimeout(() =>{
//     console.log("clear interval ran ");
//    },10000);


// let arr = [ 1,2,3,4,5];
// arr.forEach((el)=>{
//     console.log(el);
// });

// arr.forEach (function (el){
//     console.log(el);
// });
  
// //  let print = function (el) {
// //     console.log(el);
// //  };
// //  arr.forEach(print);



// let arr =[
//     {
//         name: "aman";
//         marks: 98,
//     },{
//         name : "rajat",
//         marks: 99,
//     },{
//         name: "amit",
//         marks: 84,
//     },
// ];
// let gpa : number[]
// let gpa =students.map((el) =>{
// return el.marks / 10;
// })
// arr.forEach((student) =>{
//     console.log(student.marks);
// });




// let num = [1,2,3];
// let double =num.map((el) =>{
//     return el*el;
// });


// let nums = [1,2,3,4];
// let finalValue = nums.reduce ((rem, el)=>{
//     console.log(res);
//      return res +el;
// });
// console.log(finalValue);


// let arr =  [ 1,2,3,4,5];
// let max = -1;
// for (let i =  0;i< arr.length ; i++  ){
//     if (max <arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);
//or 
// let max = Array.reduce ((max,el) =>{
//     if (max <el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max);

// min element in array




// function getMin (nums){
//     let min= nums.reduce((min ,el) =>{
//         if (min < el){
//             return min; 
//         } else {
//             return el;
//         }
//     });
//     return min;
// }
// let nums = [10, 20, 30, 40, 50];



// console.log("hello");
// alert("apna college:");
