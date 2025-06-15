// Construir uma Binary Tree através dos traversals

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function buildTree(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) return null;
    let rootVal = postorder.pop();
    let root = new Node(rootVal);
    let inorderIndex = inorder.indexOf(rootVal);
    root.right = buildTree(inorder.slice(inorderIndex + 1), postorder);
    root.left = buildTree(inorder.slice(0, inorderIndex), postorder);
    return root;
}

let inorder = [9, 3, 15, 20, 7];
let postorder = [9, 15, 7, 20, 3];
console.log(JSON.stringify(buildTree(inorder, postorder), null, 2));