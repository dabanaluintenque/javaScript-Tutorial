
function StringAddition(){

   let s = "5";

   let x = 7;

   let y = 7;

   let result = s + x + y;
  
 document.getElementById('message1').innerHTML= "If you have a string before the addition, it will tread the rest of the addition as a String.";
 document.getElementById('addition1').innerHTML= result;
}

function StringAddition2(){

    let x = 7;

    let s = "5";
  
    let y = 7;

    let result = x + s + y;
    
    document.getElementById('message2').innerHTML= "If you have a string in the middle of the addition, it will tread the first as a number and the rest as a String.";
    document.getElementById('addition2').innerHTML= result;
}

function StringAddition3(){

    let x = 7;

    let y = 7;

    let s ="5";

    let result = x + y + s;
    
    document.getElementById('message3').innerHTML= "If you have a string at the end of the addition, it will do the addition first and treat the last as a String.";
    document.getElementById('addition3').innerHTML= result;
}
