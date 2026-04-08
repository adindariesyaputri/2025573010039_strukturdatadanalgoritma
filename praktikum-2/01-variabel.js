//01-variable.js
//===============================
// VARIABLE DAN DEKLARASI
//===============================

//--- DEKLARASI dengan Let (nilai bisa diubah) ---
let nama = 'Budi';
let umur = 20;
let kota = 'Banda Aceh';

console.log('=== Data Mahasiswa ===');
console.log('Nama : ', nama);
console.log('Umur :', umur);
console.log('Kota :', kota);

// --- MENGUBAH NILAI LET --- 
umur = 21;
console.log('Ulang tahun! Umur sekarang:', umur);

//--- DEKLARASI DENGAN CONST (NILAI TIDAK BISA DIUBAH) ---
const jurusan = 'Teknik INsormatika';
const tahunMasuk = 2023;

console.log('Jurusan   :', jurusan);
console.log('Tahun Masuk :', tahunMasuk );

// ---Coba Hapus '//' di baris bawah ini, lalu jalankan ulang ---
//jurusan = 'Sistem Informasi'; // -> ini akan menyebabkan ERROR!