let arr = [1,2,3,4,5,6,7,8,9]
// let newVal = arr.reduce((acc , curVal)=>{
//      return acc + curVal ; 
// } , 0)
// console.log(newVal)

//+++++++++++ OR ++++++++++

  let acc =0 ; 
let newVal = arr.reduce((acc , curVal)=>{

    return acc + curVal ; 
})
//console.log(newVal)

const shopingList = [
    {
        item : "Rice",
        price : 2678
    },
    {
        item : "Lentils",
        price : 1598
    },
    {
        item : "Soya",
        price : 459
    },
    {
        item : "Sugar",
        price : 786
    }
]

let TotalPrice = shopingList.reduce((acc , product)=> acc + product.price , 0 );
console.log(TotalPrice);


