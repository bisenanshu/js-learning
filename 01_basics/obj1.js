//singleton object

const obj = new Object();
// console.log(obj);

 const objj = {}
// // console.log(objj);
 objj.name = "Anshu";
objj.surname = "Bisen";
 objj.age = 22;
 objj.clg = "SRIT";
 objj.batch = 2023;
 //console.log(objj);

objj.greeting = function(){
   console.log(`Hello js user ${this.name}`);
 }
// console.log(objj.greeting());

//********************************** */






 const objjj  = {
     name : "Anshu",
     age : 21,
     greeting : function(){
         console.log("Anshu")
    }
}

// console.log(objjj.greeting());

//**************************************** */





//nested 

const regularUser = {
    name : "XYZ",
    partUser : {
        clg1 : "SRIT",
        year : 2
               },
     surname : "Bisen", 
}
//console.log(regularUser.partUser);

//*********************************** */




//combine two or more  objects 

const objt1 = { 1 : "A" , 2 : "B"};
const objt2 = { 3 : "a" , 4 : "b"};

//const objt3 = {objt1 , objt2 }
// ==> this create a similar problem as array
//console.log(objt3);
 
//******* Object.assign() *********/

//const objt3 = Object.assign(objt1 ,objt2)
       //OR 
const objt3 = Object.assign({} , objt1 , objt2); 
//console.log(objt3)


//*******  spread operator ****** */

const objt33 = {...objt1 , ...objt2}
//console.log(objt33);

//***************************** */




//Array of Object 







