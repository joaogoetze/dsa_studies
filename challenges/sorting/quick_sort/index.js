// Ordenar um array
// Explicação do código em print do excalidraw

function quickSort(array, left, right) {
    if (left < right) {
        pi = partition(array, left, right);
        quickSort(array, left, pi-1);
        quickSort(array, pi+1, right);
    }
}

function partition(array, left, right) {
    pivot = array[right];

    i = left-1;
    
    for (let j=left; j<right; j++) {
        if (array[j] <= pivot) {
            i+= 1;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    [array[i + 1], array[right]] = [array[right], array[i + 1]];
    return i+1;
}

array = [0,3,6,7,8,4,2,1,5];

quickSort(array, 0, array.length-1);

console.log(array);