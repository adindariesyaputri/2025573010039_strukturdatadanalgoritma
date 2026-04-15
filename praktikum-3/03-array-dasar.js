const mahasiswa = ['albudi', 'phainon', 'aventurine', 'kiana'];
const nilai = [9,87,89, 30];

console.log('array awal');
console.log('mahasiswa: ', mahasiswa);
console.log('nilai : ', nilai);
console.log('jumlah mahasiswa: ', mahasiswa.length);

console.log('akses elemen');
console.log('elemen pertama : ', mahasiswa[0]);
console.log('elemen ketiga : ', mahasiswa[2]);
console.log('elemen terakhir : ', mahasiswa[mahasiswa.length - 1]);

mahasiswa[1] = 'siti rahayu';
console.log('setelah push :', mahasiswa);

console.log('manipulasi array');
mahasiswa.push('Aang');
console.log('setelah push : ',mahasiswa);

mahasiswa.unshift('Zahra');
console.log('setelah unshift : ',mahasiswa);

const dihapusAkhir = mahasiswa.pop();
console.log('setelah pop : ',mahasiswa);


const dihapusAwal = mahasiswa.shift();
console.log('setelah shift : ',mahasiswa);

console.log('pencarian');
console.log('indeks phainon :', mahasiswa.indexOf('phainon'));
console.log('ada albudi? : ', mahasiswa.includes ('albudi'));
console.log('ada kiana? : ', mahasiswa.includes('kiana'));


const sebagian = nilai.slice(1, 4);
console.log('nilai asli :', nilai);
console.log('slice [1,4] : ', sebagian);

console.log('array awal');
console.log('mahasiswa: ', mahasiswa);
console.log('nilai : ', nilai);
console.log('jumlah mahasiswa: ', mahasiswa.length);

console.log('akses elemen');
console.log('elemen pertama : ', mahasiswa[0]);
console.log('elemen ketiga : ', mahasiswa[2]);
console.log('elemen terakhir : ', mahasiswa[mahasiswa.length - 1]);

mahasiswa[1] = 'siti rahayu';
console.log('setelah push :', mahasiswa);

console.log('manipulasi array');
mahasiswa.push('Aang');
console.log('setelah push : ',mahasiswa);

mahasiswa.unshift('Zahra');
console.log('setelah unshift : ',mahasiswa);

console.log('latihan 3');

const daftarBelanja = ['beras','sosis','ayam','daging','ketela'];

console.log('daftar berlanja');
for(let i = 0; i < daftarBelanja.length; i++){
    console.log(`${i + 1}. ${daftarBelanja[i]}`);
}

daftarBelanja.push('sayur','tahu');
console.log('setelah di push : ', daftarBelanja);

const diHapus = daftarBelanja.shift();
console.log('item yang dihapus :', diHapus);
console.log ('setelah di shift : ', daftarBelanja);

console.log('ada susu? :', daftarBelanja.includes('susu'));

console.log('elemen dalam daftar belanja terakhir : ', daftarBelanja[daftarBelanja.length -1]);


