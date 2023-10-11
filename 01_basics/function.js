// function addTwoNumber(num1 , num2){
//     let sum = num1 + num2;
//     return sum ;
// }
// console.log(addTwoNumber(2,"4"));


function userCall(user){
    if(user===undefined)
    {
        console.log("value is not here");
        return 
    }
console.log("hey js users :" , user);
}
//************* OR *************** */

function userCall(username){
    if(!username)
    {
        console.log("value is not here");
        return 
    }
console.log("hey js users :" , user);
}

//************************************* */

function userCall(username = "sam"){
    if(!username)
    {
        console.log("value is not here");
        return 
    }
console.log("hey js users :" , user);
}
// userCall("Anshu");
// userCall();

function addAllLine(){
    console.log("this is first");
    console.log("this is second ");
    console.log("this is third");
    console.log("this is forth");
} 
console.log(addAllLine());