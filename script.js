// var temii = ["jiii","jnad","billli","junaid","annna","haba"];
// console.log(temii.length);




// nameofEmploy.slice(0,2);
// nameofEmploy.splice(2 , 0 ,"Ajjjjjj","kallllll","loooooooo");
// nameofEmploy.unshift("ali aja ");
// nameofEmploy.push("amjad" , "kamran" ,"sohail");
// console.log(nameofEmploy.length);
// console.log("original :" , nameofEmploy);



// var nameofEmploys = [" aki","mona","sajiiid","farime","amna","sajid","junagt","hassan","jumah","ajnna","aki"]
// console.log(nameofEmploy.length)
// var nameofEmploy = ["masood","mannan","hannan","hadi","amjad","ali"] ;

// function getCalled(value , index ,arr){
//   if (value == "hannan" ){
//    return value + "failed"
//   }
//   else if(value == "mannan"){
//    return value + "Failed"
//   }
//   else if(value == "ali"){
//    return value + "failed"
//   }
//   else{
//    return value + "passed"
//   }
// } 
// var result = nameofEmploy.map(getCalled)
// console.log(result)

// nameofEmploys.map(getCalled);


var codeofEmploys = [12 , 24, 6, 6, 93, 92,44, 42, 324, 235,22 ,325];
console.log(codeofEmploys.length);
console.log("original :",codeofEmploys);

function called(value){
if(value == 6){
   return "OUT"
}
else{
   return value
}

}

var result = codeofEmploys.map(called);
console.log(result);



var max = ["ali","jamat","imran","kaleem","kubra"];
function called(value , index , arr){
   if  ( value == "ali"){
      console.log("putter chuti kr");
   }
   else{
      console.log(value)
   }
return value + "hi";
}
var result1 = max.map(called);
console.log(result1)