 //object literals
 const smbl = Symbol("key11") ;
 const objj = {
     name : "Anshu",
    Age  : 21,
    "Clg" : "SRIT",
    batch  : 2023,
     [smbl] : "key1",
     city : "jbp",
     lastDay : ["monday" , "sunday"]
 }

//objj.surname = "Bisen"

objj.greeting = function(){
    console.log(`hello js user ${this.name}`);
}
console.log(objj.greeting())

 





//************************* */

//  console.log(objj);
//  objj.name = "Anshu Bisen";
//  console.log(objj);

 //************************** */

 //ofter this we can not change the object value

//  Object.freeze(objj);

 //******************************** */

//  objj.Age = 22;
//  console.log(objj)

//**************************************** */

//  console.log(objj);
// console.log(objj.city);
// console.log(objj["Clg"]);
//console.log(objj[smbl]);  //Symbol access 
//console.log(objj["batch"]);

//********************************* */

//singliton 
// constracter method ke through
// ====> Object.create