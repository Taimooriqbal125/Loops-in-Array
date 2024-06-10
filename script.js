// var temii = ["jiii","jnad","billli","junaid","annna","haba"];
// console.log(temii.length);


var nameofEmploy = ["masood","mannan","hannan","hadi","amjad","ali"] ;

// nameofEmploy.slice(0,2);
// nameofEmploy.splice(2 , 0 ,"Ajjjjjj","kallllll","loooooooo");
// nameofEmploy.unshift("ali aja ");
// nameofEmploy.push("amjad" , "kamran" ,"sohail");
console.log(nameofEmploy.length);
console.log("original :" , nameofEmploy);


function getCalled(value , index , arr) {
    if (value == hannan){
        console.log("failed", value);
    }
    else{
        console.log("Passed" , value)
    }
}

nameofEmploy.forEach(getCalled);
