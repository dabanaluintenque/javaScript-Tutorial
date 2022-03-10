
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


function usingSliceFunction(){

 

    let letter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       
     document.getElementById('example4').innerHTML= "Slice() extracts a part of a string and returns the extracted part in a new string." +"<br>"+

 "The method takes 2 parameters: the start position, and the end position (end -1)"+"<br>"+
    "Here is the example of slicing letters ABCDEFGHIJKLMNOPQRSTUVWXYZ: slice(0,7)" +"<br>"+"output is: "+  letter.slice(0,26);
  
}

function usingSubstringFunction(){
  
   let letter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   
   document.getElementById('example5').innerHTML="substring() is similar to slice()"+"<br>"+
   "The difference is that substring() cannot accept negative indixes."+"<br>"+
    
    "substring(0,7) in 26 letter, output is: " +letter.substring(0,7);
}
function usingCharAt(){

    let phrase = document.getElementById('example6').innerHTML;

     document.getElementById('example6').innerHTML= phrase.charAt(6);
}

function replaceMeth(){

 let text = document.getElementById('example7').innerHTML;


   document.getElementById('example7').innerHTML=text.replace("Dabana", "Jorge"); 
}

function searchMeth(){


    let text = document.getElementById('example8').innerHTML;

    let find = document.getElementById('example8').innerHTML=text.search('Dabana');

  /*  
                   Extra
  
  let searching = document.getElementById('infor');

    if(find>30){


        searching.innerHTML="The value you are searching for is at the end of the phrase."

        
    }

    else{

       searching.innerHTML="keep looking"
    } */
}

function matchMeth(){

    let words = document.getElementById('example9').innerHTML;
       

  let allLength =   document.getElementById('example9').innerHTML= words.match(/ke/gi);

  if(allLength!==null){
 document.getElementById('info').innerHTML="the length is: "+allLength.length;
    
  }
}

function includesMeth(){

    let text = document.getElementById('example10').innerHTML;

    document.getElementById('example10').innerHTML= text.includes('bad',0);
}

