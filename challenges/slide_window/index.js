// Pega o maior array possível tendo em vista que
// uma letra pode aparecer no máximo duas vezes
// Explicação do código diretamente nos comentários

list = ['b', 'c', 'b', 'b', 'b', 'c', 'b', 'a'];
maxLength = 1;
l = 0;
r = 0;
let counter = {};

counter[list[0]] = 1;

while (r < list.length - 1) {
    // Avança o ponteiro da direita e soma a quantidade
    // que a letra já apareceu ao contator
    r++;
    counter[list[r]] = (counter[list[r]] || 0) + 1;

    // Se o contador de uma letra está em 3
    // vai diminuindo a window, avançando o ponteiro da esquerda
    // e subtrai o valor do contator da letra que está em l no contador
    while (counter[list[r]] === 3) {
      counter[list[l]] -= 1;
      l++;
    }

    // Atualiza o tamanho da janela
    maxLength = Math.max(maxLength, r - l + 1);
  }

console.log(list.slice(l,r+1));
console.log(maxLength);