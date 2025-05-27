let array = [3,4,5,1,2];

function sortArray(array) {
    for (i=0; i<array.length; i++) {
        for (x=0; x<array.length; x++) {
            if (array[i] < array[x]) {
                [array[x], array[i]] = [array[i], array[x]]
            }
        }
    }
    return array;
}

newArray = sortArray(array);
console.log(newArray);