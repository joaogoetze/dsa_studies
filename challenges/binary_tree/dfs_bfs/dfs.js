// Achar um valor específico em uma binary_tree usando dfs
// Explicação diretamente nos comentários e no print do excalidraw

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

    dfs_search(target) {
        return this.dfs_search_recursive(this.root, target);
    }

    dfs_search_recursive(node, target) {
        if (!node) return false;
        if (node.value == target) return true;
        // Vai buscando nos nodes da equerda enquando existir nodes à esquerda
        // Quando não houver nodes à esquerda, busca à direita
        return this.dfs_search_recursive(node.left, target) || this.dfs_search_recursive(node.right, target);
    }
}

let node6 = new Node(6)
let node5 = new Node(1)
let node4 = new Node(15);
let node3 = new Node(7, node6, node4);
let node2 = new Node(2, node5);
let node1 = new Node(5, node2, node3);
let tree = new BinaryTree(node1);
console.log(tree.dfs_search(60));