// Inserir nodes em uma binary tree de forma ordenada
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

    insert(node) {
        this.insert_recursive(node, this.root);
    }

    insert_recursive(node, actual) {
        // Se o valor do novo node for maior que o node atual
        // vai adicionar na direita, senão, na esquerda
        // A recursividade apenas faz percorrer até o final da binary tree
        if (node.value > actual.value) {
            if (actual.right) {
                this.insert_recursive(node, actual.right);
            } else {
                actual.right = node;
                console.log('Node atual: ', actual.value);
                console.log('Node que é maior que ele: ', actual.right.value);
            }
        } else {
            if (actual.left) {
                this.insert_recursive(node, actual.left);
            } else {
                actual.left = node;
                console.log('Node atual: ', actual.value);
                console.log('Node que é menor que ele: ', actual.left.value);
            }
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