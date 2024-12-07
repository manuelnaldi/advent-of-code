// @mannynaldi - 5 Dec '24   
// *************************
const fileSystem = require('node:fs');

var data = null;
try {
  data = fileSystem.readFileSync('input.txt', 'utf8');
} catch (err) {
  console.error(err);
}
const rows = data.replace(/\r/g, "").split("\n").filter(x => x != "").map(x => x.split(" ").map(Number));

// first star
function firstCriteria(levels){
  let increase = null;
  let decrease = null;
  for (let i = 1; i < levels.length; i++) {
    if(levels[i] > levels[i-1]) increase = true;
    if(levels[i] < levels[i-1]) decrease = true;
  };
  return ((decrease && !increase)||(!decrease && increase));
}

function secondCriteria(levels){
  let biggestChange = 0;
  let smallestChange = 4;
  levels.forEach((level,index) => {
    if(index !== 0){ 
      biggestChange = Math.max(biggestChange, Math.abs(levels[index]-levels[index-1]));
      smallestChange = Math.min(smallestChange, Math.abs(levels[index]-levels[index-1]));
    }
  })
  return smallestChange > 0 && biggestChange < 4;
}

var secureLevels = 0;
rows.forEach(row => {
  if(firstCriteria(row) && secondCriteria(row)) secureLevels++;
})
console.log("[FIRST STAR] final secureLevels: "+ secureLevels);



//second star
rows.forEach((row) => {
  if(!firstCriteria(row) || !secondCriteria(row)){
      for(i = 0; i < row.length ; i++){
        temp = [...row];
        temp.splice(i, 1);
        console.log(temp);
        if(firstCriteria(temp) && secondCriteria(temp)){
          secureLevels++;
          break;
        }
      };
  };
});
console.log("[SECOND STAR] final secureLevels: "+ secureLevels);
