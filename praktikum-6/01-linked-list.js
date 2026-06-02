class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) current = current.next;
            current.next = newNode;
        }
        this.size++;
    }

    prepend(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    insertAt(data, index){
        if(index < 0 || index > this.size){
            console.log('index di luar batas!'); return;
        }
        if (index === 0) { this.prepend(data); return;}
        const newNode = new Node(data);
        let current = this.head;
        for(let i = 0; i < index -1; i++ ) current = current.next;
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }

    delete(data){
        if(!this.head) return false;
        if(this.head.data === data){
            this.head = this.head.next;
            this.size--;
            return true;
        }
        let current = this.head;
        while(current.next){
            if(current.next.data === data){
                current.next = current.next.next;
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    search(data){
        let current = this.head;
        let index = 0;
        while(current){
            if(current.data === data) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    print(){
        if(!this.head){ console.log (' [list kosong]'); return;}
        let result = '';
        let current = this.head;
        while(current){
            result += current.next ? `[${current.data}] ->` : `[${current.data}]`;
            current = current.next;
        }
        console.log('', result , `(size : ${this.size})`);
    }

    reverse(){
        let prev = null;
        let current = this.head;
        while (current){
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    toArray(){
        const arr = [];
        let current = this.head;
        while(current) {arr.push(current.data); current = current.next;}
        return arr;
    }

    getAt(index){
    if(index < 0 || index >= this.size) return null;
    let current= this.head;
    for(let i = 0; i < index; i++) current = current.next;
    return current.data;
}

deleteAt(index){
    if(index < 0 || index >= this.size){
        console.log('index di luar batas!'); return;
    }
    if(index === 0){
        this.head = this.head.next;
        this.size--;
        return;
    }
    let current = this.head;
    for(let i = 0; i < index - 1; i++) current = current.next;
    current.next = current.next.next;
    this.size--;
}

indexOf(data) {
    let current = this.head;
    let index = 0;
    while(current){
        if(current.data === data) return index;
        current = current.next;
        index++;
    }
    return -1;
}

isEmpty(){
    return this.head === null;
}

clear(){
    this.head = null;
    this.size = 0;
}

}

const ll = new LinkedList();

console.log('===append===');
ll.append(10); ll.append(20); ll.append(30); ll.append(40);
ll.print();

console.log('==prepend==');
ll.prepend(5);
ll.print();

console.log('==insert di indeks 2==');
ll.insertAt(15,2);
ll.print();

console.log('search');
console.log('indeks nilai 20:', ll.search(20));
console.log('indeks nilai 90:', ll.search(90));
console.log('delete 20');
ll.delete(20);
ll.print();

console.log('reverse');
ll.reverse();
ll.print();


console.log('-----------------------latihan 1--------------------------');

console.log('setup awal');
ll.append(10); ll.append(20); ll.append(30); ll.append(40); ll.append(50);
ll.print();

console.log('isEmpty');
console.log('apakah list kosong?', ll.isEmpty());

console.log('getAt');
console.log('getAt(0): ', ll.getAt(0));
console.log('getAt(2): ', ll.getAt(2));
console.log('getAt(4): ', ll.getAt(4));
console.log('getAt(9): ', ll.getAt(9));
console.log('getAt(-1): ', ll.getAt(-1));

console.log('indexOf');
console.log('indexOf(10): ', ll.indexOf(10));
console.log('indexOf(30): ', ll.indexOf(30));
console.log('indexOf(50): ', ll.indexOf(50));
console.log('indexOf(99): ', ll.indexOf(99));

console.log('deleteAt');
console.log('sebelum deleteAt(2): '); ll.print();
ll.deleteAt(2);
console.log('setelah deleteAt(2):'); ll.print();
ll.deleteAt(0);
console.log('setelah deleteAt(0):'); ll.print();

console.log('clear()');
console.log('sebelum clear()'); ll.print();
ll.clear();
console.log('setelah clear():'); ll.print();

console.log('isEmpty');
console.log('apakah list kosong?', ll.isEmpty());