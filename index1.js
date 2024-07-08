//  Built in functions of array in JS

//  Push function (use to add new element in end of array )
// syntax   nameofarray.push()
var temii = ["ali" , "temiii" ,"abu" ,"ami"];
temii.push("baji", "khala");
console.log("Original" , temii);

// Unshift function (use to add new elemet at starting of array)
//  syntax  nameofarray.unshift( data we want to enter )
temii.unshift("saeed" ,"hurara");
console.log("Original" , temii);

// pop function ( use to remove element at ends)
// syntax  nameofarray.pop() more add add to remove more
temii.pop();
console.log("Original" , temii);

// shift function ( use to remove at starting)
// syntax nameofarray.shift()
temii.shift();
console.log("Original" , temii);

// splice function ( use for all pop , push , shift , unshift)
// syntax nameofarray [index , delcount , new element]
temii.splice(0 , 3 , "cat" , "goat" ,"camel");
console.log("Original" , temii);

// slice function ( use to divide the array elements )
// syntax nameofarray.slice()
// MOST IMPORTANT NOT EFFECTED ORIGINAL ARRAY
temii.slice(0 , 1)

// .imcludes in array given only boolean value
let age = [10,27,78,20];
var result = age.includes(10);
console.log(result);

//  .indexof  use to find index of value 
let employesnumber = [10,25,90,16,100];
var returns = employesnumber.indexOf(100);
console.log(returns);