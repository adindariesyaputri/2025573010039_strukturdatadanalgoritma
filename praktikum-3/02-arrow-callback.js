function kuadratBiasa(x){
    return x * x;
}

const kuadrat = (x) =>{
    return x * x;
};

const kuadratRingkas = x => x * x;

console.log('=== perbandingan penulisan====');
console.log('biasa : ', kuadratBiasa(5));
console.log('arrow : ', kuadrat(5));
console.log('ringkas : ', kuadratRingkas(5));

const luas = (panjang, lebar) => panjang * lebar;
const salam = (nama,waktu) => `selamat ${waktu}, ${nama}`;

console.log('luas 4 x 6 : ', luas(4,6));
console.log(salam('budi','pagi'));

function lakukanOperasi(angka, operasiCallback){
    console.log(`angka awal: ${angka}`);
    const hasil = operasiCallback(angka);
    console.log(`hasil setelah operasi : ${hasil}`);
}

console.log('callback');

lakukanOperasi(7,kuadratRingkas);
lakukanOperasi(18, x => x + 100);
lakukanOperasi(20, function(x){
    return x / 2;
});

console.log('setTimeout (callback)');
console.log('pesan 1: sebelum timer');

setTimeout(() => { 
 console.log('Pesan 3: Ini dari dalam setTimeout (setelah 1 detik)'); 
}, 1000);

console.log('Pesan 2: Setelah mendaftarkan timer'); 

console.log('Latihan 2');

const keHurufBesar = (teks) => teks.toUpperCase();
const tambahSeru = (teks) => teks + '!';
const hitungKata = (teks) => teks.split(' ').length;

function prosesKalimat(kalimat, transformasiCallback){
    const hasil = transformasiCallback(kalimat);
    return hasil;
}
console.log(prosesKalimat('belajar javascript itu menyenangkan', tambahSeru));
console.log(prosesKalimat('belajar javascript itu menyenangkan', keHurufBesar));
console.log(prosesKalimat('belajar javascript itu menyenangkan', hitungKata));

