

function toStringMeth(){

  
  let year = 2022;
  let value = document.getElementById('example1').innerHTML = year.toString();
  }

  function toFixedMeth(){

      let weight = 7.7799

    let value = document.getElementById('example2').innerHTML =  

     "Original number is: " + weight +"<br>"+                             //   7.7799
    "toFixed without parameter: " + weight.toFixed()+"<br>"+               //   8
     "Passing 0 as parameter: "+ weight.toFixed(0)+"<br>"+                 //   8
     "Passing 1 as parameter: "+ weight.toFixed(1)+"<br>"+                 //   7.8
     "Passing 2 as parameter: "+ weight.toFixed(2)+"<br>"+                 //   7.78
     "Passing 3 as parameter: "+ weight.toFixed(3)+"<br>"+                 //   7.780
     "Passing 4 as parameter: "+ weight.toFixed(4)+"<br>"+                 //   7.7799
     "Passing 5 as parameter: "+ weight.toFixed(5)+"<br>"+                 //   7.77990
     "Passing 6 as parameter: "+ weight.toFixed(0)+"<br>"+                 //    8
     "Passing 7 as parameter: "+ weight.toFixed(0)+"<br>";                  //   8
  }

  function parseIntMeth(){

      let str = "2022";

      let value = document.getElementById('example3').innerHTML= parseInt(str);
  }

  function parseFloatMeth(){


      let str = "77.78";

      let value = document.getElementById('example4').innerHTML=parseFloat(str);
  }