// Pega o valor e a posição da primeira letra da palavra que não se repete
// Explicação do código diretamente nos comentários

const word = ['l', 'e', 'e', 't', 'c', 'o', 'd', 'e'];
let counter = {};
let position = 0;
let i = 0;

// Percorre todo o array
while (i < word.length) {
    // Se a letra em específico ainda não está no contador...
    if (counter[word[i]] === undefined) {
        // Cria um contator para essa letra
        counter[word[i]] = { count: 1, positions: [i] };
        // Se já existir
    } else {
        // Soma um valor no contador
        counter[word[i]].count += 1;
        // Adiciona a posição  
        counter[word[i]].positions.push(i);
    }   
    i++;
}

console.log(counter);

// Percorre o contador
for (key in counter) {
    // Vai printar as letras que aparecem apenas uma vez
    if (counter[key].count === 1) {
        console.log(counter[key]);
        break;
    }
}