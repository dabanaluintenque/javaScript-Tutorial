
const objectDefinition= {

    definition: "In an object we store value as name: value pairs. (where name is the object property and value is the property name."
};
function answer(){

 document.getElementById('example1').innerHTML = objectDefinition.definition;

}

const student = {
    firstName: "Dabana",
    lastName: "Intenque",
     age:       23,
     gpa: 3.7,
     school: "Bridgewater State University",
     email: "student.edu",
     work: "TTC (Teaching Technology Center)",


    information: function(){

   
     
     let info = document.getElementById('example2').innerHTML= "Student information: "+"<br>"+ "first Name: " +this.firstName.replace(student.firstName,"Jorge")+"<br>"+" Last Name: "+
     this.lastName+ "<br>"+"  Age: "+this.age+"<br>"+" GPA: "+this.gpa+"<br>"+"  school: "+this.school+"<br>"+"  Email: "+this.email+"<br>"+"  Work: "+this.work;

      
     
   
     return info;

     }
};  


function getInfo(){

     return student.information();
}





/*
const person= {
     name: "jorge",
     age: 22
};

 console.log(person.name.replace("jorge","student"));  */



