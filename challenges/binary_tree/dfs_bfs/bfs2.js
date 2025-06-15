// Colocar valores de nodes do mesmo nível em arrays
// Desafio no Leetcode: https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/1660334074/
// Explicação em print do excalidraw

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

    bfs() {
        if (!this.root) {
            return false;
        }
        let queue = new Dequeue();
        queue.push(this.root);
        let array = [];
        while(queue.length > 0) {
            let subarray = [];
            let arraySize = queue.length;
            for (let i = 0; i < arraySize; i++) {
                let node = queue.shift();
                if (node.value) {
                    subarray.push(node.value)
                }
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right); 
                }
            }
            array.push(subarray);
        }
        return array;
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
console.log(tree.bfs());