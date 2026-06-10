class Node { constructor(d){this.data=d;this.next=null;} }

class Stack {
  constructor() { this.top=null; this.size=0; }

  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) return null;
    const val = this.top.data;
    this.top = this.top.next;
    this.size--;
    return val;
  }

  peek() { return this.top ? this.top.data : null; }
  isEmpty() { return this.size === 0; }
}

class MinStack {
  constructor() {
    this.stackData = new Stack(); // O(1) - stack utama untuk semua data
    this.stackMin  = new Stack(); // O(1) - stack khusus menyimpan nilai minimum
  }

  // O(1) - push ke stack utama, dan kondisional push ke stack min
  push(data) {
    this.stackData.push(data);
    if (this.stackMin.isEmpty() || data <= this.stackMin.peek()) {
      this.stackMin.push(data);
    }
    console.log(`  push(${data}) → stackData top: ${this.stackData.peek()}, min saat ini: ${this.getMin()}`);
  }

  // O(1) - pop dari stack utama, dan kondisional pop dari stack min
  pop() {
    const val = this.stackData.pop();
    if (val === this.stackMin.peek()) {
      this.stackMin.pop();
    }
    console.log(`  pop() → dikeluarkan: ${val}, min saat ini: ${this.getMin()}`);
    return val;
  }

  // O(1) - cukup lihat top dari stack min
  getMin() {
    return this.stackMin.peek();
  }

  // O(1)
  peek() { return this.stackData.peek(); }

  // O(1)
  isEmpty() { return this.stackData.isEmpty(); }
}

console.log('=== MIN STACK ===');
const ms = new MinStack();

ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);
console.log(`  getMin() = ${ms.getMin()}`); // harusnya 2

ms.pop();
console.log(`  getMin() = ${ms.getMin()}`); // harusnya 3

ms.pop();
console.log(`  getMin() = ${ms.getMin()}`); // harusnya 3