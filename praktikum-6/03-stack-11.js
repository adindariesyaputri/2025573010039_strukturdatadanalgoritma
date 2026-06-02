class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    prepend(data) {
        const newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    removeHead() {
        if (!this.head) return null;

        const removed = this.head.data;
        this.head = this.head.next;
        this.length--;

        return removed;
    }

    getHead() {
        return this.head ? this.head.data : null;
    }

    isEmpty() {
        return this.head === null;
    }

    size() {
        return this.length;
    }

    print() {
        let current = this.head;
        let result = [];

        while (current) {
            result.push(current.data);
            current = current.next;
        }

        console.log("Top ->", result.join(" -> "));
    }
}

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(data) {
        this.list.prepend(data);
    }

    pop() {
        return this.list.removeHead();
    }

    peek() {
        return this.list.getHead();
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    size() {
        return this.list.size();
    }

    print() {
        this.list.print();
    }
}


console.log("------------ DEMO STACK LINKED LIST -------------------------------");

const stack = new Stack();

stack.push("A");
stack.push("B");
stack.push("C");

stack.print();

console.log("Peek :", stack.peek());
console.log("Pop  :", stack.pop());

stack.print();

console.log("Size :", stack.size());

console.log("-------------------------- SIMULASI UNDO --------------------------------");

const riwayatAksi = [
    "Menulis Halo",
    "Menulis Dunia",
    "Bold Teks",
    "Ubah Warna",
    "Tambah Gambar"
];

const undoStack = new Stack();

console.log("Menyimpan aksi ke stack...");

for (const aksi of riwayatAksi) {
    undoStack.push(aksi);
    console.log("Push:", aksi);
}

console.log("\nIsi Stack:");
undoStack.print();

console.log("\nUndo:");

console.log("Undo ->", undoStack.pop());
console.log("Undo ->", undoStack.pop());
console.log("Undo ->", undoStack.pop());

console.log("\nSisa Stack:");
undoStack.print();