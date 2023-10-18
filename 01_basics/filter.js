//#########################################
       //======= filter() =========

let myNums = [1,2,3,4,5,6,7,8,9,10]
let numFiter = myNums.filter((num)=> num>4)
//console.log(numFiter);

let score = [55,77,98,89,78,84,84,35];
let scoreFilter = score.filter((marks)=>{
     return marks > 75 ;
})
// console.log(scoreFilter);
// console.log(scoreFilter.length)

const booksDetails = [
{
 title : 'Book1' ,
 genre : 'fiction' ,
 publish : 1981 ,
 edition : 2004
} ,
{
title : 'Book2' ,
genre : 'Non-fiction' ,
publish : 1981 ,
edition : 2004
},
{
     title : 'Book3' ,
 genre : 'history' ,
 publish : 1981 ,
 edition : 2004
},
{
     title : 'Book4' ,
 genre : 'Non-fiction' ,
 publish : 1981 ,
 edition : 2004
},
{
     title : 'Book5' ,
 genre : 'Science' ,
 publish : 1992 ,
 edition : 2008
},
{title : 'Book6' ,
genre : 'fiction' ,
publish : 1999 ,
edition : 2007},
{
     title : 'Book7' ,
 genre : 'history' ,
 publish : 1989 ,
 edition : 2010
},
{
     title : 'Book8' ,
 genre : 'science' ,
 publish : 2009 ,
 edition : 2014
},
{
     title : 'Book9' ,
 genre : 'fiction' ,
 publish : 1987 ,
 edition : 2010
},
{
     title : 'Book10' ,
 genre : 'Non-fiction' ,
 publish : 1981,
 edition : 2089
}]

