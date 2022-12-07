const path = require('path');
const fs = require('fs');
const charakters = 14

const inputFilePath = path.resolve('../../Input/input_06.txt');
var stringToCheck
const allFileContents = fs.readFileSync(inputFilePath, 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {

    let stringArray = Array.from(line);


    for (let i = 0; i< stringArray.length; i++) {

        for (let j = 0; j<charakters; j++){
            stringToCheck = stringToCheck + stringArray[i+j];
            //console.log(stringToCheck);
        };
        if (!/(.).*\1/.test(stringToCheck))
        {
            let solution = i + charakters;
            console.log ("Aktueler i-Wert: " + solution  + " StringToCheck: " + stringToCheck);
           
            return;
        }
        stringToCheck = ''; 
        
        
    }
});