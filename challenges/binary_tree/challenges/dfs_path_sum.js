// Achar um caminho do root até o fim que se somar os valores dos nodes
// dá um valor específico, a forma de percorrer é como o preorder traversal/dfs
// Desafio no Leetcode: https://leetcode.com/problems/path-sum/submissions/1658124848/

class Node {
    constructor (value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function top(root, target) {
    return top_recursive(root, target);
}

function top_recursive(actual, complement) {
    if (!actual) return false;
    const new_complement = complement - actual.value;
    if (new_complement === 0 && !actual.left && !actual.right) {
        return true;
    }
    return top_recursive(actual.left, new_complement) ||
    top_recursive(actual.right, new_complement);
}

node10 = new Node(7);
node11 = new Node(2);
node12 = new Node(11, node10, node11);
node13 = new Node(4, node12, null);
node14 = new Node(1);
node15 = new Node(4, null, node14);
node16 = new Node(13);
node17 = new Node(8, node16, node15);
node18 = new Node(5, node13, node17);
root = node18;
console.log(top(root, 22));