const fs = require('fs');
const win = 6;
const draw = 3;
const loss = 0;
const rock = 1;
const paper = 2;
const scissors = 3;
var array;
var sum = 0;


const allFileContents = fs.readFileSync('Input/input_02.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
 console.log(line);
 array = line.split(' ');
 console.log(array[0]);
 console.log(array[1]);
 switch (array[1]){
    case 'X':
        {
            sum += loss; 
            
            switch(array[0]){
                case 'A':
                    sum+=scissors; break;
                case 'B':
                    sum+=rock; break;
                case 'C':
                    sum+=paper; break;
            }
            break;
        }
       
    case 'Y':
        {
        sum += draw;
         switch(array[0]){
            case 'A':
                sum+=rock; break;
            case 'B':
                sum+=paper; break;
            case 'C':
                sum+=scissors; break;
        }}
        break;
    case 'Z':
        {
        sum += win;

        switch(array[0]){
            case 'A':
                sum+=paper; break;
            case 'B':
                sum+=scissors; break;
            case 'C':
                sum+=rock; break;
        }
        break;
        }

 };
   });
console.log(sum);
