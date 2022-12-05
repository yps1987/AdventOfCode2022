const path = require('path');
const fs = require('fs');
const step = 1;
const part = 2;
var array1 = ["W", "R", "F"];
var array2 = ["T", "H", "M", "C", "D", "V", "W", "P"];
var array3 = ["P", "M", "Z", "N", "L"];
var array4 = ["J", "C", "H", "R"];
var array5 = ["C", "P", "G", "H", "Q", "T", "B"];
var array6 = ["G", "C", "W", "L", "F", "Z"];
var array7 = ["W", "V", "L", "Q", "Z", "J", "G", "C"];
var array8 = ["P", "N", "R", "F", "W", "T", "V", "C"];
var array9 = ["J", "W", "H", "G", "R", "S", "V"];

const inputFilePath = path.resolve('../../Input/input_05.txt');

const allFileContents = fs.readFileSync(inputFilePath, 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
   let amount = Number(line.substring(line.indexOf(" "), line.indexOf(" ", line.indexOf(" ") +1)));
   
   let from = Number(line.substring(line.lastIndexOf("m")+2,line.indexOf("t")-1));
   let to = Number(line.substring(line.lastIndexOf(" "),line.length));
   console.log(line + " Anzahl: " + amount + " Von: "  + from + " Nach: " + to);
   if (part == 1)
   {
    for (let i = 0; i< amount; i++)
    {
     let element = eval("array" + from +".pop();");
     console.log(eval("array" + to + ".push('" + element + "');"));
    }
   }
   if (part == 2)
   {
      let movedParts = eval("array" +  from  + ".slice(-" + amount + ")");
      console.log("MP: " + movedParts); 
      console.log(eval("array" + to + "=array" + to + ".concat(movedParts)" ));
      //console.log(eval("array" + to + ".concat(" + movedParts +")"));
      for (let i = 0; i< amount; i++)
    {
     let element = eval("array" + from +".pop();");
    }
   }

   console.log("1: " + array1);
   console.log("2: " + array2);
   console.log("3: " + array3);
   console.log("4: " + array4);
   console.log("5: " + array5);
   console.log("6: " + array6);
   console.log("7: " + array7);
   console.log("8: " + array8);
   console.log("9: " + array9);
}
);
console.log(array1.pop() + array2.pop() + array3.pop() + array4.pop() +array5.pop() +array6.pop()+ array7.pop()+ array8.pop()+array9.pop());