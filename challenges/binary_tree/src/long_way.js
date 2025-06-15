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

    maxDepth(root) {
        if (root === null) return 0;
      
        const leftDepth = this.maxDepth(root.left);
        const rightDepth = this.maxDepth(root.right);
      
        return Math.max(leftDepth, rightDepth) + 1;
    }
      
}

const node4 = new Node(4);
const node3 = new Node(3, null, node4);
const node2 = new Node(2, null, node3);
const node1 = new Node(1, null, node2);
const tree = new BinaryTree(node1);
console.log(tree.maxDepth(node1));