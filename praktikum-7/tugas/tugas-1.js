class Node { constructor(d){this.data=d;this.next=null;} }

class Queue {
  constructor() { this.head=null; this.tail=null; this.size=0; }
  enqueue(data) {
    const node = new Node(data);
    if (!this.tail) { this.head = this.tail = node; }
    else { this.tail.next = node; this.tail = node; }
    this.size++;
  }
  dequeue() {
    if (this.isEmpty()) return null;
    const val = this.head.data;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.size--;
    return val;
  }
  isEmpty() { return this.size === 0; }
  print() {
    let s = 'FRONT → ', cur = this.head;
    while(cur){ s += `[${cur.data.nama}] `; cur = cur.next; }
    console.log('  ', s.trim(), '← BACK');
  }
}

class Pasien {
  constructor(id, nama, prioritas, waktuDaftar) {
    this.id = id;
    this.nama = nama;
    this.prioritas = prioritas;
    this.waktuDaftar = waktuDaftar;
  }
}

class AntrianRS {
  constructor() {
    this.antrianDarurat = new Queue();
    this.antrianBiasa = new Queue();
  }

  daftar(pasien) {
    if (pasien.prioritas === 'darurat') {
      this.antrianDarurat.enqueue(pasien);
      console.log(`  [MASUK] ${pasien.nama} → Antrian DARURAT`);
    } else {
      this.antrianBiasa.enqueue(pasien);
      console.log(`  [MASUK] ${pasien.nama} → Antrian BIASA`);
    }
  }

  layani() {
    let pasien = null;
    if (!this.antrianDarurat.isEmpty()) {
      pasien = this.antrianDarurat.dequeue();
      console.log(`  [DILAYANI] ${pasien.nama} (DARURAT) | Daftar: ${pasien.waktuDaftar}`);
    } else if (!this.antrianBiasa.isEmpty()) {
      pasien = this.antrianBiasa.dequeue();
      console.log(`  [DILAYANI] ${pasien.nama} (BIASA) | Daftar: ${pasien.waktuDaftar}`);
    } else {
      console.log('  [INFO] Semua antrian kosong.');
    }
    return pasien;
  }

  tampilkanAntrian() {
    console.log('  --- Status Antrian ---');
    console.log(`  Darurat (${this.antrianDarurat.size} orang):`);
    if (!this.antrianDarurat.isEmpty()) this.antrianDarurat.print();
    else console.log('    (kosong)');
    console.log(`  Biasa (${this.antrianBiasa.size} orang):`);
    if (!this.antrianBiasa.isEmpty()) this.antrianBiasa.print();
    else console.log('    (kosong)');
    console.log('  ----------------------');
  }
}

const rs = new AntrianRS();

const dataPasien = [
  new Pasien(1, 'Andi',    'biasa',   '08:00'),
  new Pasien(2, 'Budi',    'darurat', '08:05'),
  new Pasien(3, 'Citra',   'biasa',   '08:10'),
  new Pasien(4, 'Dina',    'darurat', '08:12'),
  new Pasien(5, 'Eko',     'biasa',   '08:15'),
  new Pasien(6, 'Fajar',   'darurat', '08:20'),
  new Pasien(7, 'Gita',    'biasa',   '08:22'),
  new Pasien(8, 'Hendra',  'biasa',   '08:25'),
  new Pasien(9, 'Indah',   'darurat', '08:30'),
  new Pasien(10,'Joko',    'biasa',   '08:35'),
];

console.log('=== PENDAFTARAN PASIEN ===');
dataPasien.forEach(p => rs.daftar(p));

console.log('\n=== STATUS ANTRIAN AWAL ===');
rs.tampilkanAntrian();

console.log('\n=== PROSES PELAYANAN ===');
for (let i = 0; i < 10; i++) {
  rs.layani();
}

console.log('\n=== STATUS ANTRIAN AKHIR ===');
rs.tampilkanAntrian();