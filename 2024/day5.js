// @mannynaldi - 7 Dec '24   
// *************************
const fileSystem = require('node:fs');

var data = null;
try {
  data = fileSystem.readFileSync('2024/input.txt', 'utf8');
} catch (err) {
  console.error(err);
}

//first star
const splittedData = data.split(/\n\s*\n/);
const pageOrderRules = splittedData[0].split("\n");
const updates = splittedData[1].split("\n");

var splittedPageOrderRules = [];
pageOrderRules.forEach(rule => {
  let ruleArray = rule.split("|").map(Number);
  splittedPageOrderRules.push(ruleArray);
})

function checkOrderRule(update) {
  var middleNumber = undefined;
  var orderOk = true;
  for(let i=1; i < update.length; i++){
    for (let j=i-1; j >= 0; j--){
      for(let k=0; k < splittedPageOrderRules.length; k++) {
        if(update[i] === splittedPageOrderRules[k][0] && update[j]===splittedPageOrderRules[k][1]){
          orderOk = false;
          break;
        }
        if(!orderOk) break;
      }
      if(!orderOk) break;
    }
  }
  if(orderOk) {
    const middleIndex = Math.trunc(update.length/2);
    middleNumber = update[middleIndex];
  }
  return middleNumber;
}

var total = 0;
updates.forEach((update) => {
  const splittedUpdate = update.split(",").map(Number);
  const middleNumber = checkOrderRule(splittedUpdate);
  if(middleNumber != undefined) total += middleNumber
})
console.log(total);

//second star
