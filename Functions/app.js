
function regularFunction(){

let message ="Wy Functions: you can reuse code Define the code once, and use it many times."

document.getElementById('example1').innerHTML= message;
}

function returnFunction(firstName, lastName){


  let fullName = document.getElementById('example2').innerHTML=firstName+" "+lastName;

    return fullName;
}

function convertToGigabytes(mega){

 document.getElementById('example3').innerHTML= " To convert from megabytes to gigabytes, Multiply your"+
 " figure by 0.001 (or divide by 1000). In this example we will use division. To converty 1000000MGB"


let result = document.getElementById("answer").innerHTML= (mega/1000)+"GB";

return result;
 
}


