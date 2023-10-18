// let arr = [12,22,33,44,55,66];
// for(let val of arr){
//     console.log(val);
// }   ==> print array value

// for(let val in arr){
//     console.log(val);
// }   ==> print array keys

//#########################################


// const object = {
//     name : "Anshu Bisen",
//     age : 32,
//     batch : 2023
// }

//for(let obj in object){
//  console.log(obj ,"=>", object[obj] );
// }

//######################################

//===========(for in loop)=============

//map() is not iterable for in loop s not work

const information = {
    name : "anshu",
    dep  : "IT",
    rollNo : 8,
    batch : 2023
}
 for(let info in information){
  //console.log(info,"=>",information[info]);
 }



 let number = [12,33,22,33,45,56];
 for(let num in number){
//    console.log(num ,"=>",number[num]);
 }



 let greeting = "Good morning";
 for(let greet in greeting){
   // console.log(greeting[greet]);
 }


 //##########################################


 //==========(for of loop)=================

//  #####################################
//  const information1 = {              #
//     name  : "anshu",                 #
//     dep   : "IT",                    #
//     batch : 2023,                    #
//  }                                   #
// for(let info1 of information1){      #
//     console.log(info1);              #
// }                                    #
//for of loop is not work in obj i      #
//dont know why                         #
// ######################################

let number1 = [12,22,33,44,55,66]
for(let num1 of number1){
    //console.log(num1);
}

let greeting1 = "Good Night";
for(let greet1 of greeting1){
   // console.log(greet1);
}

//###########################################
  //  ONLY UNIQ VALUES

let map = new Map();
map.set("IN" , "India");
map.set("USA" , "United States of America");
map.set("FR" , "France");
map.set("IN" , "India");
//console.log(map);

for(let [key,val] of map){
  //console.log(key , "=>" , val);
}


//#########################################

// ======(forEach loop)=====


let coding = ["cpp" , "py" , "rd" , "java"]
coding.forEach(function(lang){
  //console.log(`This is coding language => ${lang}`)
});

let numbers = [2,4,6,7,8,11];
numbers.forEach((val)=>{
  //console.log(val ,"=>" , val + 2)
})

informativeData = [
  {
  language : "java",
  languageFile : "java"
},
{
  language: "python",
  languageFile : "py"
},
{
  language : "ruby",
  languageFile : "rb"
}
]

informativeData.forEach((item)=>{
//console.log(item.language);
//console.log(item)
})












