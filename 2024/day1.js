const fileSystem = require('node:fs');

// ******************
// first star
// ******************

// read the file
var data = null;
try {
  data = fileSystem.readFileSync('day1/input.txt', 'utf8');
} catch (err) {
  console.error(err);
}

//parsed data to split locationId into different array
const list1 = [], list2 = [];
const rows = data.trim().split('\n');
rows.forEach(row => {
    const [col1, col2] = row.split(/\s+/).map(Number); // Divide per spazi e converte in numeri
    list1.push(col1);
    list2.push(col2);
});

var total = 0;
const list1copy = [...list1], list2copy = [...list2];
//search for the smallest in each array, calculate distance and sum it into the "total" variable
while(list1.length !== 0 && list2.length !== 0) {
    const minList1 = Math.min(...list1);
    const minList2 = Math.min(...list2);

    total+= Math.abs(minList1 - minList2);

    const minIndexList1 = list1.indexOf(minList1);
    const minIndexList2 = list2.indexOf(minList2);
    minIndexList1 > -1 && list1.splice(minIndexList1, 1);
    minIndexList2 > -1 && list2.splice(minIndexList2, 1);
}
console.log("Total first star: "+total);

// ******************
//second star
// ******************
//calculate similarity score
var similarityScore = 0;
list1copy.forEach(num1 => {
    const count = list2copy.filter(num2 => num2 === num1).length;
    similarityScore += num1 * count;
})
console.log("Similarity Score: "+similarityScore);
