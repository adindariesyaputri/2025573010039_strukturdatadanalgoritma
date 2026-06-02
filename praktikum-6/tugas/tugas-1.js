class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null; // O(1) akses node terakhir
        this.length = 0;
    }

    // Big O: O(1)
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    // Big O: O(1)
    prepend(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    // Big O: O(n)
    insertAt(index, data) {
        if (index < 0 || index > this.length) return;

        if (index === 0) return this.prepend(data);
        if (index === this.length) return this.append(data);

        const newNode = new Node(data);

        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        newNode.next = current;
        newNode.prev = current.prev;

        current.prev.next = newNode;
        current.prev = newNode;

        this.length++;
    }

    // Big O: O(n)
    delete(data) {
        let current = this.head;

        while (current) {

            if (current.data === data) {

                if (current === this.head) {
                    this.head = current.next;

                    if (this.head)
                        this.head.prev = null;
                }

                else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                }

                else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }

                this.length--;
                return true;
            }

            current = current.next;
        }

        return false;
    }

    // Big O: O(n)
    reverse() {
        let current = this.head;
        let temp = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    // Big O: O(n)
    printForward() {
        let current = this.head;
        let result = [];

        while (current) {
            result.push(current.data);
            current = current.next;
        }

        console.log("Depan ->", result.join(" <-> "));
    }

    // Big O: O(n)
    printBackward() {
        let current = this.tail;
        let result = [];

        while (current) {
            result.push(current.data);
            current = current.prev;
        }

        console.log("Belakang ->", result.join(" <-> "));
    }
}

const dll = new DoublyLinkedList();

dll.append(10);
dll.append(20);
dll.append(30);

dll.prepend(5);

dll.insertAt(2, 15);

console.log("Data Awal:");
dll.printForward();
dll.printBackward();

dll.delete(20);

console.log("\nSetelah Delete 20:");
dll.printForward();

dll.reverse();

console.log("\nSetelah Reverse:");
dll.printForward();
dll.printBackward();


/*
Pembuktian append O(1):

Karena terdapat pointer tail.
Node baru langsung dihubungkan ke tail
tanpa perlu traversal dari head ke akhir list.

Sehingga append memiliki kompleksitas O(1).
*/