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
const rows = data.split("\n").map(line => line.split(""));

var xmas = 0;
for (let x = 0; x < rows.length; x++) {
    for (let y = 0; y < rows[x].length; y++) {
        if (rows[x][y] != "X") continue;

        if (x > 2) {
            if (rows[x - 1][y] == "M" && rows[x - 2][y] == "A" && rows[x - 3][y] == "S") xmas++;
            if (rows[x - 1][y - 1] == "M" && rows[x - 2][y - 2] == "A" && rows[x - 3][y - 3] == "S") xmas++;
            if (rows[x - 1][y + 1] == "M" && rows[x - 2][y + 2] == "A" && rows[x - 3][y + 3] == "S") xmas++;
        }

        if (rows[x][y - 1] == "M" && rows[x][y - 2] == "A" && rows[x][y - 3] == "S") xmas++;
        if (rows[x][y + 1] == "M" && rows[x][y + 2] == "A" && rows[x][y + 3] == "S") xmas++;

        if (x < rows.length - 3) {
            if (rows[x + 1][y] == "M" && rows[x + 2][y] == "A" && rows[x + 3][y] == "S") xmas++;
            if (rows[x + 1][y - 1] == "M" && rows[x + 2][y - 2] == "A" && rows[x + 3][y - 3] == "S") xmas++;
            if (rows[x + 1][y + 1] == "M" && rows[x + 2][y + 2] == "A" && rows[x + 3][y + 3] == "S") xmas++;
        }
    }
}
console.log("XMAS word occurrence: " + xmas);



//second star
var masX = 0;
for (let y = 1; y < rows.length - 1; y++) {
    for (let x = 1; x < rows[y].length - 1; x++) {
        if (rows[y][x] != "A") continue;

        if (rows[y - 1][x - 1] == "M" && rows[y + 1][x + 1] == "S") {
            if (rows[y + 1][x - 1] == "M" && rows[y - 1][x + 1] == "S") masX++;
            if (rows[y - 1][x + 1] == "M" && rows[y + 1][x - 1] == "S") masX++;
            continue;
        }
        if (rows[y - 1][x + 1] == "M" && rows[y + 1][x - 1] == "S") {
            if (rows[y + 1][x + 1] == "M" && rows[y - 1][x - 1] == "S") masX++;
            if (rows[y - 1][x - 1] == "M" && rows[y + 1][x + 1] == "S") masX++;
            continue;
        }
        if (rows[y + 1][x - 1] == "M" && rows[y - 1][x + 1] == "S") {
            if (rows[y - 1][x - 1] == "M" && rows[y + 1][x + 1] == "S") masX++;
            if (rows[y + 1][x + 1] == "M" && rows[y - 1][x - 1] == "S") masX++;
            continue;
        }
        if (rows[y + 1][x + 1] == "M" && rows[y - 1][x - 1] == "S") {
            if (rows[y - 1][x + 1] == "M" && rows[y + 1][x - 1] == "S") masX++;
            if (rows[y + 1][x - 1] == "M" && rows[y - 1][x + 1] == "S") masX++;
            continue;
        }
    }
}
console.log("MAS X occurrence: "+ masX);
