const path = require('path');
const fs = require('fs');
const step = 1;

var sum = 0;
var sumPartial = 0;
const inputFilePath = path.resolve('../../Input/input_04.txt');










const allFileContents = fs.readFileSync(inputFilePath, 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
    let firstElve = line.substring(0, line.indexOf(","));
    let feLeft = Number(firstElve.substring(0, firstElve.indexOf('-')));
    let feRight = Number(firstElve.substring(firstElve.indexOf('-') + 1, firstElve.length));
    let secondElve = line.substring(line.indexOf(",") +1, line.length);
    let seLeft = Number(secondElve.substring(0, secondElve.indexOf('-')));
    let seRight = Number(secondElve.substring(secondElve.indexOf('-') + 1, secondElve.length));
  //  let firstElveList =  Array.from({ length: (firstElveStop - firstElveStart) / step + 1}, (_, i) => firstElveStart + (i * step));
  //  let secondElveList =  Array.from({ length: (secondElveStop - secondElveStart) / step + 1}, (_, i) => secondElveStart + (i * step));

let fullOverlap = (feLeft  <= seLeft  && feRight >= seRight) || (seLeft <= feLeft && seRight >= feRight)

let partialOverlap =
    (feLeft <= seLeft && feRight >= seLeft) // range 1 overlaps range 2 partially
 || (seLeft <= feLeft && seRight >= feLeft) // range 2 overlaps range 1 partially
  
  if (fullOverlap)
  {
    sum +=1;
  }
  if (partialOverlap)
  {
    sumPartial +=1;
  }

})

console.log("Summe: " + sum);
console.log("Summe Partial: " + sumPartial);