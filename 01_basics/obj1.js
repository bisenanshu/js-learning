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

const OBJ = [
    {
        Id : 1,
        Gmail : "bisenanshu@gmail.com"
    },
    {
        Id1 : 2,
        Gmail1 : "Bisenanshu11@gmailo.com"
    },
    {
        Id2 : 3 ,
        Gmail2 : "bisenanshu32@gmail.com"
    },
    {
        id3 : 4 ,
        Gmail3 : "bisenashu44@gmail.com"
    }
]
//console.log(OBJ[0].Gmail)

// console.log(OBJ[0]);
// console.log(OBJ[0].Gmail);



//************************************** */



const tinderUser = {}
tinderUser.id = 1;
tinderUser.name = "Anshu";
tinderUser.gmail = "bisenanshu@gmail.com"
tinderUser.age = 21 


//console.log(tinderUser.hasOwnProperty('age'));


//****Object. keys() Object.values() *****

// conseolse.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
