// Encontrar um valor específico em uma lista ordenada
// Explicação do código em print do excalidraw

const list = [1, 2, 3, 4];
const find = 3;
let begin = 0;
let end = list.length - 1;

function findValue() {
    while (begin <= end) {
        let half = Math.floor((begin + end)/2);
        if (list[half] == find) {
            console.log('Number found: ', list[half]);
            return;
        } else if (list[half] > find){
            end = --half;
        } else {
            begin = ++half;
        }
    }
    console.log('The given number it is not on the list');
}

findValue();