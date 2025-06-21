// Receber um graph e cloná-lo


class Node {
    constructor (value, neigbhors) {
        this.value = value;
        this.neigbhors = neigbhors
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

node1.neigbhors = [node2, node4];
node2.neigbhors = [node1, node3];
node3.neigbhors = [node2, node4];
node4.neigbhors = [node1, node3];

function cloneGraph(node) {

    let clonedGraph = [];
    let saw = new Map();
    let array = [];
    
    array.push(node);

    while (array.length > 0) {
        let clone = array.shift();
        if (!saw.has(clone)) {
            saw.set(clone, clone);
            clonedGraph.push(clone);
            if (clone && clone.neigbhors[0]) {
                array.push(clone.neigbhors[0]);
            }
            if (clone && clone.neigbhors[1]) {
                array.push(clone.neigbhors[1]);
            }
        }
    }
    return clonedGraph;
}

console.log('Lista clonada: \n ', cloneGraph(node1));