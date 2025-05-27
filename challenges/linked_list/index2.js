// Inverter uma liked list
// Não necessita explicação

class Node {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }
}

let node3 = new Node(3);
let node2 = new Node(2, node3);
let node1 = new Node(1, node2);

let head = node1;

function invertList(head) { 
    let new_head = null;
    while (head) {
        let next_node = head.next;
        head.next = new_head;
        new_head = head;
        head = next_node;
    }
    return new_head;
}

let new_list = invertList(head);
console.log(new_list);