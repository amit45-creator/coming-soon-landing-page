// const student ={
//     fullName: "Amit Kumar",
//     marks: 87,   //properties 
//     printMarks: function(){     //behaviour
//         console.log("marks =",this.marks);   //student.marks
//     },
// };

// prototype bhi ek onject hai jo onject ke andar hi rhta hai jism properties and behavior hote hai 




// const employee = {
//     calcTax1() {         //1st method
        
//             console.log("tax rate is 10%");
//         },
//         // calcTax2:function()  {   //2nd method
//         //     console.log("tax rate is 10%");
//         // }
//     };

//     const karanArjun={
//         salary: 50000,
//     };
//     karanArjun._proto_=employee;




// class ToyataCar{
//     start(){
//       console.log("start");  
//     }
//    stop(){
//     console.log("Stop");

//    }
//    setBrand(brand){
//     this.brand=brand;
//    }

// }

// let fortuner=new ToyataCar();
// fortuner.setBrand("fortuner");
// let lexus =new ToyataCar();
// lexus.setBrand("lexus");


// class ToyataCar{
//     constructor(brand,mileage){
//         console.log("cheating new object");
//         this.brand=brand;
//         this.mileage=mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }

// let fortuner =new ToyataCar("fortuner",10);//constructor
// console.log(fortuner);
// let lexus=new ToyataCar("lexus",12);//constructor
// console.log(lexus);



// class Parent {
//     hello(){
//         console.log("hello");

//     }
// }
//  class Child extends Parent{
    
//  }
//  let obj =new Child();




// class Person{
//     constructor(name){
//         this.species="home sapiens";
//         this.name=name;
//     }
//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends Person {
//     constructor (name){
//         super(name);//to invoke parentt class constructor,agar super me name pass nhi karte to name me undefined aata 
//     }work(){
//         super.eat();
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("Amit");

// two question practice form object and classes 







    
