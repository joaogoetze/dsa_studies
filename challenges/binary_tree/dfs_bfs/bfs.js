// Achar um node usando busca BFS
// Explicação do código diretamente nos comentários e no print do exaclidraw

var Dequeue = require('dequeue');

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

    bfs(root, target) {
        if (!root) {
            return false;
        }
        let queue = new Dequeue();
        queue.push(root);

        // Enquanto houver elementos na fila
        while(queue) {
            // O node a ser avaliado vai ser sempre o primeiro da fila
            let node = queue.shift();
            if (node.value === target) {
                return true;
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
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
let tree = new BinaryTree(node1);
tree.insert(node2);
tree.insert(node3);
tree.insert(node4);
tree.insert(node5);
tree.insert(node6);
console.log(tree.bfs(15));