class Stack{
    constructor(){
        this.data = [];
        this.ukuran = 0;
    }

    push(elemen){
        this.data.push(elemen);
        this.ukuran++;
        console.log(`push '${elemen}' -> stack: ${this.data}`);
    }

    pop(){
        if(this.isEmpty()){
            console.log(' stack ini kosong! tidak bisa pop ');
            return null;
        }
        const dikeluarkan = this.data.pop();
        this.ukuran--;
        console.log(`pop '${dikeluarkan}' -> stack: [${this.data}]`);
        return dikeluarkan;
    }

    peek(){
        if(this.isEmpty()) return null;
        return this.data[this.data.length - 1];
    }

    isEmpty(){ return this.ukuran === 0;}
    size(){ return this.ukuran;}

    tampilkan(){
        console.log(`stack (atas->bawah): [${[... this.data].reverse()}]`);
    }
}

class Queue{
    constructor(){
        this.data = [];
        this.ukuran = 0;
    }

    enqueue(elemen){
        this.data.push(elemen);
        this.ukuran++;
        console.log(`enqueue '${elemen}' -> Queue: [${this.data}]`);
    }

    dequeue(){
        if (this.isEmpty()){
            console.log('queue kosong! tidak bisa dequeue');
            return null;
        }
        const dikeluarkan = this.data.shift();
        this.ukuran--;
        console.log(`   dequeue '${dikeluarkan}' -> Queue: [${this.data}]`);
        return dikeluarkan;
    }
    front() {
    if (this.isEmpty()) return null;
    return this.data[0];
    }
    isEmpty() { return this.ukuran === 0; }
    size() { return this.ukuran; }
    tampilkan() {
        console.log(` Queue (depan→belakang): [${this.data}]`);
        }
}

console.log('DEMONSTRASI STACK (LIFO)');
    const stack = new Stack();
    stack.push('A');
    stack.push('B');
    stack.push('C');

 console.log(' Peek (puncak):', stack.peek());
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();

console.log('Simulasi Undo');
const riwayatAksi = new Stack();

riwayatAksi.push('Ketik: Halo');
riwayatAksi.push('Ketik: Dunia');
riwayatAksi.push('Bold teks');
riwayatAksi.push('Ubah warna');

console.log(' Undo:', riwayatAksi.pop());
console.log(' Undo:', riwayatAksi.pop());

riwayatAksi.tampilkan();

console.log('DEMONSTRASI QUEUE (FIFO)');
const queue = new Queue();
queue.enqueue('X');
queue.enqueue('Y');
queue.enqueue('Z');

console.log(' Front (depan):', queue.front());
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log('\n--- Simulasi Antrian Printer ---');
const antrianPrinter = new Queue();
    antrianPrinter.enqueue('Dokumen-Laporan.pdf');
    antrianPrinter.enqueue('Foto-Wisuda.jpg');
    antrianPrinter.enqueue('Tugas-Akhir.docx');

    console.log(' Mencetak...');
while (!antrianPrinter.isEmpty()) {
    const dokumen = antrianPrinter.dequeue();
    console.log(` Selesai mencetak: ${dokumen}`);
}
console.log(' Semua dokumen selesai dicetak.');