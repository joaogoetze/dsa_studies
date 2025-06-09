// Achar um node com valor específico dentro de uma binary tree não ordenada
// Explicação do código diretamente nos comentários

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

    dfs(value) {
        return this.dfs_recursive(value, this.root);
    }

    // Vai até o final da binary tree tanto para esquerda quanto direita
    dfs_recursive(value, actual) {
        if (value == actual.value) {
            return true;
        }
        if (actual.left && this.dfs_recursive(value, actual.left)) {
            return true;
        }
        if (actual.right && this.dfs_recursive(value, actual.right)) {
            return true;
        }
        return false;  
    }
}

let node1 = new Node(5);
let node2 = new Node(3);
let node3 = new Node(1);
let node4 = new Node(10);
let node5 = new Node(7);
let node6 = new Node(15);
let node7 = new Node(20);
let tree = new BinaryTree(node1);
tree.insert(node2);
tree.insert(node3);
tree.insert(node4);
tree.insert(node5);
tree.insert(node6);
tree.insert(node7);
console.log(tree.dfs(20));