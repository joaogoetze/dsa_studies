// Achar um node com valor específico dentro de uma binary tree ordenada

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

    insert(node) {
        this.insert_recursive(node, this.root);
    }

    insert_recursive(node, actual) {
        if (node.value > actual.value) {
            if (actual.right) {
                this.insert_recursive(node, actual.right);
            } else {
                actual.right = node;
            }
        } else {
            if (actual.left) {
                this.insert_recursive(node, actual.left);
            } else {
                actual.left = node;
            }
        }
    }

    // Funciona apenas caso a Binary Tree esteja ordenada
    search(value) {
        return this.search_recursive(value, this.root);
    }

    // Enquanto houver nodes à esquerda e direita, vai navegando até
    // encontrar o node com o valor procurado
    // Se o valor que queremos é maior que node atual, vamos para direita
    // senão vai para a esquerda
    search_recursive(value, actual) {
        if (value == actual.value) {
            return true;
        } else if (value > actual.value) {
            if (actual.right) {
                return this.search_recursive(value, actual.right);
            }
            return false;
        } else {
            if (actual.left) {
                return this.search_recursive(value, actual.left);
            }
            return false;  
        }
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
console.log(tree.search(4));