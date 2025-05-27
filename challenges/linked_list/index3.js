// Achar a metade de uma liked list
// Explicação do código diretamente nos comentários

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

let node5 = new Node(5);
let node4 = new Node(4, node5);
let node3 = new Node(3, node4);
let node2 = new Node(2, node3);
let node1 = new Node(1, node2);

let head = node1; 

// Um ponteiro avança rápido 2 índices por vez,
// outro ponteiro avança apenas 1,
// quando o ponteiro rápido chega no final o lento chegou no meio
function findMiddle(head) {
    let current = head;
    while (current.next) {
        current = current.next;
        if (current.next) {
            current = current.next;
        }
        head = head.next;
    }
    console.log(head);
}

findMiddle(head);