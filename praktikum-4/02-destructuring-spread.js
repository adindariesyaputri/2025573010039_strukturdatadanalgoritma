const produk = {
    nama : 'cangkir neuvillette',
    merk : 'Fontaine Corp',
    harga : '2000000',
    stock :'5',
    garansi : '100 tahun',
};

const { nama, harga, stock } = produk;
console.log ('object destructuring');
console.log(`produk ${nama} | Rp${harga.toLocaleString()} | stok : ${stock}`);

const {nama : namaProduk, garansi : periodeGaransi} = produk;
console.log(`produk ${namaProduk}, garansi: ${periodeGaransi}`);

const {warna = 'tidak diketahui', stock : jumlahStock = 0} = produk;
console.log(`warna : ${warna} | stock: ${jumlahStock}`);

const koordinat = [10, 25, 5];
const [x, y, z] = koordinat;
console.log('array destructuring');
console.log(`x = ${x}, Y = ${y}, Z = ${z}`);

const [, kedua, ,] = [100, 200, 300, 400];
console.log('elemen kedua: ', kedua);

let a = 'pertama', b = 'kedua';
console.log('sebelum swap : ', a, b);
[a,b] = [b,a];
console.log('setelah swap : ', a, b);

const buah = ['anggur', 'apel', 'tomato'];
const sayur = ['bayam', 'kol'];

const salinanBuah = [... buah];
salinanBuah.push('pisang');

console.log('spread operator');
console.log('asli : ', buah);
console.log('salinan : ', salinanBuah);

const semuaMakanan = [...buah, ...sayur, 'tempe'];
console.log('gabungan :',semuaMakanan);

const profil = {nama : 'hanjin', umur : '20', kota : 'Xinxiang'};
const profilUpdate = {...profil, kota : 'Henan', pekerjaan : 'Idol Kpop'};

console.log('profil asli:', profil);
console.log('profil update : ', profilUpdate);

function jumlahkanSemua(...angka){
    console.log('argumen diterima: ', angka);
    return angka.reduce((total, n) => total + n,0);
}

console.log('rest parameter');
console.log('total :', jumlahkanSemua(1,2,3));
console.log('total :', jumlahkanSemua(10, 20, 30, 40, 50));

const [kepala,... ekor] = [1,2,3,4,5];
console.log('kepala: ', kepala);
console.log('ekor : ', ekor);

console.log('latihan 2');

const timA = ['Budi', 'Siti', 'Ahmad'];
const timB = ['Rina', 'Doni'];

const timGabungan = [... timA, ... timB, 'Zahra'];
console.log(timGabungan);

const [Kapten, ...anggota] = timGabungan;
console.log("Kapten", Kapten);
console.log('anggota', anggota);

const pengaturanDefault = {
    tema: 'terang',
    bahasa: 'id',
    notifikasi : true,
    fontSize: 14
};

const pengaturanUser = {
    ...pengaturanDefault,
    tema: 'gelap',
    fontSize: 16
};

const {tema, fontSize} = pengaturanUser;

console.log('tema', tema);
console.log('fonce size', fontSize);

