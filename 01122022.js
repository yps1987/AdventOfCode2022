const fs = require('fs');
var read_array = [];
var i;
i = 0;
var sum;
var max;
var maxPos = 0;
sum = 0;
var maxSum = 0;

const allFileContents = fs.readFileSync('input_01.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {
    if (line != '') {
        sum += Number(line);
    } else {
        read_array.push(i, sum);
        sum = 0;
        i++;
    }
});
for (let j = 0; j < 3; j++) {
    max = Math.max(... read_array);
    maxSum += max;
    console.log(max);
    i = 0;
    read_array.forEach(element => {
        if (element == max) {
            console.log(i);
            maxPos = i;
        } else {
            i++
        };
    });
    read_array[maxPos] = 0;

}
console.log("Maximale Summe: " + maxSum);
