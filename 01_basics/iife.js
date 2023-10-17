(function info(){
    console.log("this is part of IIFE");
})();

(function  addTwo(num1 , num2){
    console.log(num1 + num2);
})(3,4);

(function inff(name){
    console.log("Hey i am" , name)
})("Anshu")