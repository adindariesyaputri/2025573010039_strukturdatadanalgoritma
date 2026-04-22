class Stack {
    constructor() {
        this.data = [];
    }

    push(elemen) {
        this.data.push(elemen);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    isEmpty() {
        return this.data.length === 0;
    }

    size() {
        return this.data.length;
    }
}

function cekKurungSeimbang(ekspresi) {
    const stack = new Stack();

    for (let char of ekspresi) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.isEmpty()) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.isEmpty();
}

const daftarUji = [
    '(2 + 3) * (4 - 1)',
    '((a + b)',
    ')(',
    '((()))',
    '(a + b) * (c + d)'
];

console.log('=== CEK KURUNG SEIMBANG ===');

daftarUji.forEach(ekspresi => {
    console.log(`'${ekspresi}' → Seimbang: ${cekKurungSeimbang(ekspresi)}`);
});