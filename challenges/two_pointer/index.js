//Inverter as palavras dentro do array
// Explicação do código diretamente nos comentários

let list = ['b', 'o', 'l', 'a', 'r', ' ', 'a', 'r', 't', 'e'];
let pe = 0, pd = 0;

for (let i = 0; i < list.length; i++) {
    // Se estiver no final de uma palavra
    // ou está no fim do array
    if (list[pd + 1] == ' ' || (pd + 1) == list.length) {
        let end = pd;
        // Vai invertendo as letras
        while (pe != end) {
            let aux = list[pe];
            list[pe] = list[end];
            list[end] = aux;
            pe++;
            end--;
            // Quando o ponteiro esquerdo ultrapassar
            // o direito, todas as letras já foram invertidas
            if (pe > end) {
                break;
            }
        }
        // Colocar os ponteiros no início da próxima palavra
        pe = pd + 2;
        pd += 2;  
    }
    pd++;
}

console.log(list);