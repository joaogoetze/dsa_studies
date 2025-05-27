// Retornar verdadeiro caso existam dois número
// iguais e que a distancia entre eles seja menor
// ou igual ao número fornecido
// Leet code: https://leetcode.com/problems/contains-duplicate-ii/description/?envType=problem-list-v2&envId=sliding-window
// Explicação do código em print do excalidraw

const nums = [1,0,1,1];
const k = 1;

function check(nums, k) {
    let l = 0;
    let r = 1;

    while (r < nums.length) {
        console.log(l, r);
        if (nums[l] === nums[r]) {
             if (r-l <= k){
                return true;
             } else {
                l++;
                r=l+1;
             }
        } else if (r+1 < nums.length) {
            r++;
        } else {
            l++;
            r = l+1;
        }
    }
    return false;
}

response = check(nums, k);
console.log(response);
