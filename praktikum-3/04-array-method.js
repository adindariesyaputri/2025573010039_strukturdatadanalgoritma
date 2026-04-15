const nilaiMahasiswa = [75,90,55,82,68,95,48, 77];

console.log('forEach, menampilkan semua nilai');
nilaiMahasiswa.forEach((nilai,indeks) => {
    console.log(`Mahasiswa-${indeks = 1}: ${nilai}`);
    
});

const gradeHuruf = nilaiMahasiswa.map(nilai => {
    if (nilai >= 90) return 'A';
    if (nilai >= 80) return 'B';
    if (nilai >= 70) return 'C';
    if (nilai >= 60) return 'D';
    return 'E';
});

console.log('map, nilai ke grade');
console.log('nilai : ', nilaiMahasiswa);
console.log('grade :', gradeHuruf);

const nilaiLulus = nilaiMahasiswa.filter(nilai => nilai >= 60);
const nilaiGagal = nilaiMahasiswa.filter(nilai => nilai < 60);

console.log('filter : lulus dan tidak');
console.log('semua nilai : ', nilaiMahasiswa);
console.log('nilai lulus : ', nilaiLulus);
console.log('nilai gagal : ', nilaiGagal);

const totalNilai = nilaiMahasiswa.reduce((akumulator,nilai) =>{
    return akumulator + nilai;
},0);
const rataRata = totalNilai / nilaiMahasiswa.length;

console.log('reduce statistik nilai');
console.log('total nilai :', totalNilai);
console.log('Rata-rata :', rataRata.toFixed(2));

const rataRataNilaiLulus = nilaiMahasiswa
    .filter(nilai => nilai >= 60)
    .reduce((acc, val, idx, arr) => {
        return acc + val / arr.length;
},0);

console.log('method chaining');
console.log('rata-rata nilai lulus : ', rataRataNilaiLulus.toFixed(2));

console.log('latihan 4'); //====================================================================================

const produk = [
    { nama: 'Laptop', harga: 8500000, stok: 5 },
    { nama: 'Mouse', harga: 150000, stok: 0 },
    { nama: 'Keyboard', harga: 450000, stok: 12 },
    { nama: 'Monitor', harga: 3200000, stok: 0 },
    { nama: 'Headset', harga: 350000, stok: 8 }
];

const produkTersedia = produk.filter(p => p.stok > 0);
console.log("produk tersedia:", produkTersedia);

const namaProdukTersedia = produkTersedia.map(p => p.nama);
console.log("daftar nama produk yang ada:", namaProdukTersedia);

const totalInventaris = produkTersedia.reduce((total, p) => {
    return total + (p.harga * p.stok);
}, 0);
console.log("total nilai inventaris (Tersedia): Rp" + totalInventaris.toLocaleString('id-ID'));

console.log("status");
produk.forEach(p => {
    const status = p.stok > 0 ? "[TERSEDIA]" : "[HABIS]";
    const formatHarga = "Rp" + p.harga.toLocaleString('id-ID');
    
    if (p.stok > 0) {
        console.log(`${status} ${p.nama} - ${formatHarga} (${p.stok} unit)`);
    } else {
        console.log(`${status} ${p.nama} - ${formatHarga}`);
    }
});