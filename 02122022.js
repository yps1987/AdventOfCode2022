const fs = require('fs');
const win = 6;
const draw = 3;
const loss = 0;
const rock = 1;
const paper = 2;
const scissors = 3;
var array;
var sum = 0;


const allFileContents = fs.readFileSync('input_02.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
 console.log(line);
 array = line.split(' ');
 console.log(array[0]);
 console.log(array[1]);
 switch (array[1]){
    case 'X':
        {
            sum += rock; 
            
            switch(array[0]){
                case 'A':
                    sum+=draw; break;
                case 'B':
                    sum+=loss; break;
                case 'C':
                    sum+=win; break;
            }
            break;
        }
       
    case 'Y':
        {
        sum += paper;
         switch(array[0]){
            case 'A':
                sum+=win; break;
            case 'B':
                sum+=draw; break;
            case 'C':
                sum+=loss; break;
        }}
        break;
    case 'Z':
        {
        sum += scissors;

        switch(array[0]){
            case 'A':
                sum+=loss; break;
            case 'B':
                sum+=win; break;
            case 'C':
                sum+=draw; break;
        }
        break;
        }

 };
   });
console.log(sum);
