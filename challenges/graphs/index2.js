// Receber um graph e cloná-lo

class Node {
    constructor (value, neighbors) {
        this.value = value;
        this.neighbors = neighbors
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

function cloneGraph(node) {
    if (!node) return null;

    const clones = new Map();
    const queue = [node];

    clones.set(node.value, new Node(node.value, []));

    while (queue.length > 0) {
        const curr = queue.shift();
        const currClone = clones.get(curr.value);

        for (const neighbor of curr.neighbors) {
            if (!clones.has(neighbor.value)) {
                clones.set(neighbor.value, new Node(neighbor.value, []));
                queue.push(neighbor);
            }
            currClone.neighbors.push(clones.get(neighbor.value));
        }
    }

    return clones;
};

console.log(cloneGraph(node1));