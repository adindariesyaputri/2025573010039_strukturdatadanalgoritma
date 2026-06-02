// Node

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Helper

function buatList(arr) {

    let head = null;
    let tail = null;

    for (const item of arr) {

        const node = new Node(item);

        if (!head) {
            head = node;
            tail = node;
        }

        else {
            tail.next = node;
            tail = node;
        }
    }

    return head;
}

function printList(head) {

    let current = head;
    let result = [];

    while (current) {
        result.push(current.data);
        current = current.next;
    }

    console.log(result.join(" -> "));
}

// 1. palindromeLL(head)
// Big O: O(n)

function palindromeLL(head) {

    const arr = [];

    let current = head;

    while (current) {
        arr.push(current.data);
        current = current.next;
    }

    let kiri = 0;
    let kanan = arr.length - 1;

    while (kiri < kanan) {

        if (arr[kiri] !== arr[kanan]) {
            return false;
        }

        kiri++;
        kanan--;
    }

    return true;
}

// 2. hapusNDariAkhir(head, n)
// Big O: O(n)

function hapusNDariAkhir(head, n) {

    const dummy = new Node(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
}

// 3. tengahLinkedList(head)
// Big O: O(n)

function tengahLinkedList(head) {

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.data;
}

console.log("------------------------PALINDROME ----------------------------");

console.log(
    palindromeLL(
        buatList([1,2,3,2,1])
    )
);

console.log(
    palindromeLL(
        buatList([1,2,2,1])
    )
);

console.log(
    palindromeLL(
        buatList([1,2,3])
    )
);

console.log("--------------------- HAPUS N DARI AKHIR --------------------");

let list1 = buatList([1,2,3,4,5]);
printList(list1);

list1 = hapusNDariAkhir(list1,2);
printList(list1);

let list2 = buatList([10,20,30,40]);
list2 = hapusNDariAkhir(list2,1);
printList(list2);

let list3 = buatList([5,6,7]);
list3 = hapusNDariAkhir(list3,3);
printList(list3);

console.log("-------------NODE TENGAH -----------------");

console.log(
    tengahLinkedList(
        buatList([1,2,3,4,5])
    )
);

console.log(
    tengahLinkedList(
        buatList([1,2,3,4,5,6])
    )
);

console.log(
    tengahLinkedList(
        buatList([10,20,30])
    )
);