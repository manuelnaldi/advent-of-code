// @mannynaldi - 6 Dec '24   
// *************************
const fileSystem = require('node:fs');

var data = null;
try {
  data = fileSystem.readFileSync('2024/input.txt', 'utf8');
} catch (err) {
  console.error(err);
}

//first star
const rows = data.split("\n");
console.log(rows);


