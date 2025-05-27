// Achar um valor em um array grande de forma mais rápida
// Explicação do código em print do excalidraw

const list = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50
  ];

const find = 25;

result = finNumberInArray(list, find);
console.log(result);

function finNumberInArray(list, find) {
    
    if (list[0] == find) {
        return `Number found: ${list[0]}`
    }

    let r = 1;

    while (list[r] < find) {
        r = (r*2) > list.length ? list.length-1 : r*2
        if (list[r] == find) {
            return `Number found: ${list[r]}`
        }
    }

    let begin = r/2;
    let end = r;

    while (begin <= end) {
        let middle = Math.floor((begin + end)/2);
        if(list[middle] == find) {
            return `Number found: ${list[middle]}`;
        } else if (list[middle] > find){
            end = --middle;
        } else {
            begin = ++middle;
        }
    }
    return 'The number is not on the list'
}