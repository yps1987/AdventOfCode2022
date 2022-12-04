const fs = require('fs');
var rucksack1 = [];
var rucksack2 = [];
var rucksack3 = [];
var i = 1;


var doubledValue = '';
var sum = 0;

const allFileContents = fs.readFileSync('Input/input_03.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
   console.log("Aktueller I Wert: " + i);
    if (i%3 == 1)
    {

        rucksack1 = Array.from(line);
    }
    if (i%3 == 2)
    {
        rucksack2 = Array.from(line);
    }

    if (i%3 == 0)
    {
        rucksack3 = Array.from(line);
        rucksack1.forEach(element => {
       
            if (rucksack2.includes(element)) {
                
                if (rucksack3.includes(element)){
                    doubledValue = element;

                    console.log("Doppeltes Element: " + doubledValue);


                };
               
              }
        
            });
            
            if (doubledValue === doubledValue.toUpperCase())
            {
                sum +=  doubledValue.charCodeAt(0) - 64 + 26;
            }else
            {
                sum += doubledValue.charCodeAt(0) - 96;
            }
            console.log(sum);
    }

   

   


   

   i++;
})




