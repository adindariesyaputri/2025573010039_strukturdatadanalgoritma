let nilaiUjian = 78;

console.log('== konversi grade ==');
console.log('Nilai:', nilaiUjian);

if (nilaiUjian >= 90) {
console.log('Grade: A (Sangat Baik)');
}  else if (nilaiUjian >= 80) {
console.log('Grade: B (Baik)');
} else if (nilaiUjian >= 70) {
console.log('Grade: C (Cukup)');
} else if (nilaiUjian >= 60) {
console.log('Grade: D (Kurang)');
} else {
console.log('Grade: E (Tidak Lulus)');
}

// switch : cek nama hari
let namaHari = 'Rabu';

console.log('\n=== cek jenis hari ===');
switch(namaHari){
    case 'Senin' :
    case 'Selasa' :
    case 'Rabu' :
    case 'Kamis' :
    case 'Jumat' :
        console.log('Rabu adalah hari kerja.');
        break;
    case 'Sabtu' :
    case 'minggu' :
        console.log('Minggu adalah akhir pekan.');
        break;
    default:
        console.log('Nama hari tidak dikenali');

}

// ternary operator : cek kelulusan
let nilaiAkhir = 65;
let statusLulus = nilaiAkhir >= 60 ? 'LULUS' : 'TIDAK LULUS';

console.log('== status kelulusan');
console.log(`Nilai ${nilaiAkhir}: ${statusLulus}`);

// latihan 2
const bulan = 7;
let musim;

if (bulan === 12 || bulan === 1 || bulan === 2) {
    musim = "Dingin";
} else if (bulan === 3 || bulan === 4 || bulan === 5) {
    musim = "Semi";
} else if (bulan === 6 || bulan === 7 || bulan === 8) {
    musim = "Panas";
} else if (bulan === 9 || bulan === 10 || bulan === 11) {
    musim = "Gugur";
} else {
    musim = "Bulan tidak valid";
}

console.log(`Bulan ${bulan} termasuk musim: ${musim}`);

// Operator Logika Cuaca
const adaAwan = true;
const adaAngin = false;

console.log(`Apakah cuaca mendung sekaligus berangin? ${adaAwan && adaAngin}`);
console.log(`Apakah ada awan atau angin? ${adaAwan || adaAngin}`);
console.log(`Apakah langit cerah (tidak ada awan)? ${!adaAwan}`);