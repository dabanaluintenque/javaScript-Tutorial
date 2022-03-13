
function callArray(){

    const students =["Barry", "Dabana","Himanshu","Maria"];

    document.getElementById('example1').innerHTML = students;
}

function arrayLength(){

const students =["Barry", "Dabana","Himanshu","Maria"];

document.getElementById('example2').innerHTML=  students.length; 

 // How to access the last element of an array.
//students[students.length-1];
   
}

function arrayLooping(){

const students =["Barry", "Dabana","Himanshu","Maria"];

let stleng = students.length;

  let studentList =" ";

  for(let i = 0; i < stleng ; i++){

      studentList+= students[i] +"<br>";
  }

 document.getElementById('example3').innerHTML= studentList;
}

function joinMeth(){

const students =["Barry", "Dabana","Himanshu","Maria"];

let value = document.getElementById('example4').innerHTML= students.join("<br>");

}

function popMeth(){

    const students = ["Barry", "Dabana", "Himanshu", "Maria"];

    document.getElementById('example5').innerHTML= "List of all students before pop: "+"<br>"+ students.join("<br>");

    document.getElementById('example6').innerHTML =  "pop() student: "+ students.pop();

    document.getElementById('example7').innerHTML = "List of all students after pop: "+"<br>"+ students.join("<br>");
  

}

function pushMeth(){

    const students = ["Barry", "Dabana", "Himanshu", "Maria"];

    document.getElementById('example8').innerHTML= "Current list of the students before push: "+"<br>"+ students.join("<br>");

    document.getElementById('example9').innerHTML="push new student : "+ students.push("John");

    document.getElementById('example10').innerHTML=" List after a new student has been pushed to the class: "+"<br>" + students.join("<br>");
}

function shiftMeth(){

    const students = ["Barry", "Dabana", "Himanshu", "Maria"];

    document.getElementById('example11').innerHTML = "List of all student before shift: "+"<br>"+ students.join("<br>");

    document.getElementById('example12').innerHTML = "shifted student: "+ students.shift();

    document.getElementById('example13').innerHTML = "List of all student after shift: "+"<br>"+ students.join("<br>");
}

function unshiftMeth(){

    const students= ["Barry", "Dabana", "Himanshu", "Maria"];

    document.getElementById('example14').innerHTML= "List of the students before unshift(): "+"<br>"+ students.join("<br>");

    document.getElementById('example15').innerHTML= "unshift() a new student: " + students.unshift("Blair");

    document.getElementById('example16').innerHTML= "List of the students after unshift(): "+"<br>"+students.join("<br>");
}

function spliceMeth(){

    const students = ["Barry", "Dabana", "Himanshu", "Maria"];

    document.getElementById('example17').innerHTML= "List of the current student before splice():<br> "+ students.join("<br>")

    document.getElementById('example18').innerHTML= "splice() student: "+ students.splice(2, 1, " Jannah", " Reece", " Blair");


    document.getElementById('example19').innerHTML= "List of the student after splice():<br>"+ students.join("<br>");
}

function sliceMeth(){

    const students = ["Barry", "Dabana", "Himanshu", "Maria", "Kent", "Jannah"," Reece", "Blair"];

    document.getElementById('example20').innerHTML= "List before slice(): <br> "+ students.join("<br>");

    document.getElementById('example21').innerHTML= "The sliced part: <br>" + students.slice(4).join('<br>');

    document.getElementById('example22').innerHTML="List after slice():<br> "+ students.join('<br>');
}

function sortMeth(){

    const students = ["Himanshu", "Maria","Barry", "Dabana"];

    document.getElementById('example23').innerHTML= "List before sort():<br> "+ students.join("<br>")

    document.getElementById('example24').innerHTML= "List after sort(): <br> "+ students.sort().join("<br>");
}

function sortNumbers(){

    const studentsGrades =[90, 95, 100, 85, 70, 65, 80, 95];

    document.getElementById('example25').innerHTML= "Grades before sort():<br> "+ studentsGrades.join('<br>');

    document.getElementById('example26').innerHTML= "Using just sort() Method without Compare Function():<br> " + studentsGrades.sort().join('<br>');

    document.getElementById('example27').innerHTML= "sort() with comparing function: <br>"+ studentsGrades.sort(function(a,b){return a-b}).join('<br>');
}

function reverseMeth(){

    const students = ["Barry", "Himanshu", "Dabana", "Maria"];

    document.getElementById('example28').innerHTML=" List before reverse():<br> "+ students.join("<br>");

    document.getElementById('example29').innerHTML=" reverse() without sort() first: <br> "+ students.reverse().join(", ");


      students.sort() ; 
    document.getElementById('example30').innerHTML=" call sort() before reverse(): <br> " + students.reverse().join(", ");

}

function findMinValue(){

    const grades =[ 90, 95, 100, 85, 70, 65, 80, 95];

    document.getElementById('example31').innerHTML= "Grades: <br> "+ grades.join("<br>");

     grades.sort(function(a,b){return a-b}); 
    document.getElementById('example32').innerHTML= "The lowest grade is: "+grades[0];
}



function arrayMinValue(){

     const grades =[90,95,100,85,70, 65, 80, 97];

    let arrayLength = grades.length;

    let currentMin = Infinity;

    while(arrayLength--){

        if(grades[arrayLength] < currentMin)

        currentMin= grades[arrayLength];
    }

   /*  for(let i = 1; i< arrayLength; i ++){

        if( grades[i]< currentMin)
         currentMin = grades[i];
       
    } */

    document.getElementById('example33').innerHTML="The lowest grade is: "+ currentMin;
}

function arrayMaxValue(){

    const grades =[ 90,95,100,85, 70, 65, 80, 97];

    let arrayLength = grades.length;

    let correntMax = - Infinity;

    while(arrayLength--){


        if(grades[arrayLength] > correntMax)

        correntMax = grades[arrayLength];
    }

    document.getElementById('example34').innerHTML=" The highest grade is: " +correntMax;
}




