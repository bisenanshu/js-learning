//console.log(this)     ==>{}

//******************inside browser **** */
 //  ==> window obj

 //+++++++++++++++++++++++++++++++++++++++++

//**********this keyword use inside obj*****/

  const obj = {
    name : "Anshu",
    Age : 21,
     Dep : "IDBTransaction",
    Batch : 2023,
     info  : function(){
      console.log(`Hey i am ${this.name} and i'm 
   ${this.Age} year old`)
    }
  }
 obj.info();
 obj.name = "riya khan";
 obj.info(); 
 Object.freeze(obj)
 obj.Age = 44;
 obj.info();
//***************************************/

function atgtg(){
    let name = " Anshu ";
     //console.log(this.name)
     //this is not work inside the function it is work only object current context
     //console.log(this)
}
atgtg();

     //+++++++++++++//

  //this return only {}  inside the arrow fun

 const Arofun = ()=>{
     //console.log(this);
 }
// Arofun();

//******************************************/



let addTwo = (num1 , num2) => num1 + num2
//console.log(addTwo(2,3));

let addThree = (val1,val2,val3) =>{
    return val1 + val2 + val3 ;
}
//console.log(addThree(2,3,4));



