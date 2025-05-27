// Achar se existe um loop na liked list (se um node aponta para um node que já passou)
// Explicação do código em print do excalidraw

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

let node3 = new Node(3, null);
let node2 = new Node(2, node3);
let node1 = new Node(1, node2);
let node4 = new Node(4, node2);
node3.next = node4;
head = node1;

function loopVerify() {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        if (fast === slow) {
            return true;
        }
        slow = slow.next;
    }
    return false
}

response = loopVerify();
console.log(response);