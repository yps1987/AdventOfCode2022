const fs = require('fs');
var compartment1 = [];
var compartment2 = [];
var doubledValue = '';
var sum = 0;






const allFileContents = fs.readFileSync('Input/input_03.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
   compartment1	= Array.from(line.substring(0, line.length/2));
   compartment2 = Array.from(line.substring(line.length/2, line.length));
   
   console.log("Element: " +  line );
   console.log("Compartment 1: " + line.substring(0, line.length/2));
   console.log("Compartment 2: " + line.substring(line.length/2, line.length))

   compartment1.forEach(element => {
       
    if (compartment2.includes(element)) {
        
        doubledValue=  element;
       
      }

    });

    console.log("Doppeltes Element: " + doubledValue);
    
    console.log("Elementwert: " + doubledValue.charCodeAt(0))
    if (doubledValue === doubledValue.toUpperCase())
    {
        sum +=  doubledValue.charCodeAt(0) - 64 + 26;
        console.log(doubledValue.charCodeAt(0) - 64 + 26);
    }else
    {
        sum += doubledValue.charCodeAt(0) - 96;
    }
    console.log(sum);

   

   
})




