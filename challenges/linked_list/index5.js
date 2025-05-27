// Mergear duas linked lists já ordenadas
// Explicação do código diretamente nos comentários

class Node {
    constructor(value, next = null, name) {
        this.value = value;
        this.next = next;
        this.name = name;
    }
}

let node3 = new Node(4, null, "Node 3");
let node2 = new Node(2, node3, "Node 2");
let node1 = new Node(1, node2, "Node 1");

let node6 = new Node(4, null, "Node 6");
let node5 = new Node(3, node6, "Node 5");
let node4 = new Node(1, node5, "Node 4");

// Cria um node fictício, para ser o primeiro, e vai adicionando os nexts
// a partir dele, verificando os valores

function mergeLists(l1, l2) {
    let dummy = new Node(0);
    let current = dummy;

    while (l1 && l2) {
        if (l1.value <= l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 || l2;

    return dummy.next;
}

let merged = mergeLists(node1, node4);

while (merged) {
    console.log(`(${merged.name}) -> ${merged.value}`);
    merged = merged.next;
}
