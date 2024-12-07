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
function mul(array){
  return Number(array[1]) * Number(array[2]);
}
const multiplications = [...data.matchAll(new RegExp(/mul\(([0-9]{1,3}),([0-9]{1,3})\)/g))];
var total = 0;
multiplications.forEach(match => {
  total += mul(match);
});
console.log("First star total: "+ total);



//second star
const commands = [...data.matchAll(new RegExp(/(?:do\(\)|don't\(\)|mul\(([0-9]{1,3}),([0-9]{1,3})\))/g))];
var enabled = true;
total = 0;
commands.forEach((command) => {
  if(command[0] === "do()") enabled = true
  else if (command[0] === "don't()") enabled = false
  else if(enabled && command[0].startsWith('mul')){
    total += mul(command) 
  }
})
console.log("Second star total: "+ total);

