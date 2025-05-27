// Criar funções que permitam criar uma linked list
// Não necessita explicação

class Node {
    value = null;
    previous = null;
    next = null;
}

// Essa lista apenas serve para vizualizaçao final,
// não é necessária para o funcionamento da linked list
let list = [];
let head;
let tail;

function addInBegin(value) {
    let node = new Node();
    if (!head) {
        node.value = value;
        node.previous = null;
        node.next = null;
        head = node;
        tail = node;
        list.push(node);
    } else {
        node.value = value;
        head.previous = node
        node.next = head;
        node.previous = null;
        list.unshift(node);
        head = node;
    }
}

function addInEnd(value) {
    let node = new Node();
    if (!head) {
        node.value = value;
        node.previous = null;
        node.next = null;
        head = node;
        tail = node;
        list.push(node);
    } else {
        node.value = value;
        node.next = null;
        node.previous = tail;
        tail.next = node;
        tail = node;
        list.push(node);
    }
}

function removeFromEnd() {
    if (!head) {
        return "Empty list";
    }
    list.pop();
    tail = list[list.length -1];
    tail.next = null;
}

function removeFromBegin() {
    if (!head) {
        return "Empty list";
    }
    list.shift();
    head = list[0];
    head.previous = null;
}

addInBegin(11);
addInBegin(10);
addInEnd(12);
addInEnd(13);
removeFromEnd();
removeFromBegin();
addInEnd(14);
addInBegin(16);

console.log(list);