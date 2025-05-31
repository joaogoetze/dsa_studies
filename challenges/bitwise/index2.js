// Passar um valor, percorrer de 0 até o valor, para cada índice
// contar quantos set bits tem esse número, colocar o valor em um array
// Desafio no Leetcode: https://leetcode.com/problems/counting-bits/description/?envType=problem-list-v2&envId=bit-manipulation

function findOnes(n) {
    let i = 0;
    let ans = [];
    while (i <= n) {
        let count = 0;
        let x = i;
        while (x !== 0) {
            count += x & 1;
            x >>>= 1;
        }
        ans.push(count);
        i++;
    }
    return ans;
}

console.log(findOnes(5));