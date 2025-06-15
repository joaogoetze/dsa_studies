// Comparar se duas árvores binárias são exatamente iguais
// Desafio no Leetcode: https://leetcode.com/problems/same-tree/?envType=problem-list-v2&envId=binary-tree

class Node {
    constructor (value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor (root) {
        this.root = root;
    }

    compare_trees(actual_p, actual_q) {
        return this.recursive_compare(actual_p, actual_q);
    }

    recursive_compare(actual_p, actual_q) {
        if (actual_p === null && actual_q === null) return true;
        if (actual_p === null || actual_q === null) return false;
        if (actual_p.value !== actual_q.value) return false;
        
        return (
            this.recursive_compare(actual_p.left, actual_q.left) &&
            this.recursive_compare(actual_p.right, actual_q.right)
        );
    }
}

let node2 = new Node(2);
let node3 = new Node(3);
let node1 = new Node(1, node2, node3);
let p = new BinaryTree(node1);

let node22 = new Node(2);
let node33 = new Node(3);
let node11 = new Node(1, node22, node33);
let q = new BinaryTree(node11);

console.log(q.compare_trees(node1, node11));