// Percorre os nodes começando da esquerda e da parte mais baixa
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

    inorder_traversal() {
        let result = [];
        this.inorder_recursive(this.root, result);
        return result;
    }

    inorder_recursive(actual, result) {
        if (actual.left) {
            this.inorder_recursive(actual.left, result);
        }
        result.push(actual.value);
        if (actual.right) {
            this.inorder_recursive(actual.right, result);
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
console.log(tree.inorder_traversal());