// Percorre os nodes começando do root e vai indo de cima para baixo
// Explicação em print do excalidraw

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

    preorder_traversal() {
        let result = [];
        this.preorder_recursive(this.root, result);
        return result;
    }

    preorder_recursive(actual, result) {
        result.push(actual.value);
        if (actual.left) {
            this.preorder_recursive(actual.left, result);    
        }
        if (actual.right) {
            this.preorder_recursive(actual.right, result);
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
console.log(tree.preorder_traversal());