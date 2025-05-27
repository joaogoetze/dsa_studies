// Achar os índices dos dois valorer que somados, resultam no valor do target
// Leetcode: https://leetcode.com/problems/two-sum/description/
// Explicação do código diretamente nos comentários

const nums = [3, 2, 4];
const target = 6;

function getIndexes(nums, target) {
    map = {};
    i = 0;
    while (i < nums.length) {
        // Acha qual o valor que precisaria somar ao número do array
        // para chegar ao target
        complemento = target - nums[i];
        // Se esse valor está no map, pega a posição dele e retorna
        if(complemento in map) {
            positions = [map[complemento], i];
            return positions;    
        }
        // Se no valor não está no map, adiciona ele no map junto de seu indíce
        // nesse estilo: 1:0 -> Valor 1 posição 0
        map[nums[i]] = i;
        i++;
    }
    return 'Not found';
}

positions = getIndexes(nums, target);
console.log(positions);