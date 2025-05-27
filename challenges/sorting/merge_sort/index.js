// Ordenar uma linked list
// Explicação do código diretamente nos comentários

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

let node4 = new Node(4, null);
let node3 = new Node(2, node4);
let node2 = new Node(1, node3);
let node1 = new Node(3, node2);

let head = node1;

function findMiddle(head) {
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function mergeTwoLists(l1, l2) {
    let dummy = new Node(); // Cabeça dummy para simplificar
    let tail = dummy;
    while (l1 && l2) {
        if (l1.value < l2.value) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    tail.next = l1 || l2;
    return dummy.next;
}

// Vai quebrando a lista até ter elementos separados e ordena eles
function mergeSort(head) {
    // Caso base: lista vazia ou com um único elemento está ordenada
    if (!head || !head.next) return head;
    // Encontra o meio da lista
    let middle = findMiddle(head);
    // Divide a lista em duas metades
    let after_middle = middle.next;
    middle.next = null;
    // Aplica mergeSort recursivamente na metade esquerda
    let left = mergeSort(head);
    // Aplica mergeSort recursivamente na metade direita
    let right = mergeSort(after_middle);
    // Junta as duas metades ordenadas
    return mergeTwoLists(left, right);
}

function printLinkedList(head) {
    while (head) {
        console.log(head.value);
        head = head.next;
    }
}

let sorted_head = mergeSort(head);
printLinkedList(sorted_head);