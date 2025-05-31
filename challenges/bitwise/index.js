// Passar um valor e descobrir quantos bits tem esse valor em binário
// Desafio no Leetcode: https://leetcode.com/problems/number-of-1-bits/description/?envType=problem-list-v2&envId=bit-manipulation

num = 5;

function countBits(n) {
    let count = 0;
    while (n !== 0) {
        count += n & 1;
        n >>>= 1;
    }
    return count;
}

console.log(countBits(5));