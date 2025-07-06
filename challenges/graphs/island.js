grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

function islands(grid) {
let count = 0;

for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
        if(grid[x][y] == "1") {
            verifySides(x, y);
            count++;
        } 
    }
}

function verifySides(i, j) {
    // Verificar para baixo (linha i+1)
    if (i + 1 < grid.length && grid[i + 1][j] == "1") {
        console.log('Tem em baixo', i, j);
        grid[i][j] = "3";
        verifySides(i+1, j);
    }
    // Verificar para cima (linha i-1)
    if (i > 0 && grid[i - 1][j] == "1") {
        console.log('Tem em cima', i, j);
        grid[i][j] = "3";
        verifySides(i-1, j);
    }
    // Verificar à esquerda (coluna j-1)
    if (j > 0 && grid[i][j - 1] == "1") {
        console.log('Tem na esquerda', i, j);
        grid[i][j] = "3";
        verifySides(i, j-1);
    }
    // Verificar à direita (coluna j+1)
    if (j + 1 < grid[i].length && grid[i][j + 1] == "1") {

        console.log('Tem na direita', i, j);
        grid[i][j] = "3";
        verifySides(i, j+1)
    }
    grid[i][j] = "3";
    
}


console.log(grid);

return count;
}

console.log(islands(grid));