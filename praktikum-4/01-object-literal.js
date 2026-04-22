const mahasiswa = {
    nama : 'Budi',
    umur : 20,
    jurusan : 'Teknik Informatika',
    ipk : 3.75,
    aktif : true,
}

console.log('akses property');
console.log('nama :', mahasiswa.nama);
console.log('jurusan : ', mahasiswa['jurusan']);

const keyYangDicari = 'ipk';
console.log('ipk :', mahasiswa[keyYangDicari]);

mahasiswa.email = 'budi@mail.com';
mahasiswa.umur = 21;

console.log('setelah diubah :', mahasiswa);

delete mahasiswa.aktif;
console.log('setelah delete: ', mahasiswa);

const dosen = {
    nama : 'dr. ratio',
    matakuliah : 'Matematika',
    pengalaman : 10,

    perkenalan(){
        return `halo, saya ${this.nama}, mengajar ${this.matakuliah}`;
    },

    statusSenior(){
        if(this.pengalaman >=10){
            return `${this.nama} adalah dosen senior`;
        }
        return`${this.nama} adalah dosen junior`;
    }
};

console.log('method obbject');
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

console.log('iterasi object');
for (const key in dosen){
    if (typeof dosen[key] !== 'function'){
        console.log(`${key}: ${dosen[key]}`);
    }
}

console.log('keys :', Object.keys(mahasiswa));
console.log('values : ', Object.values(mahasiswa));

//-----------------------------------------------------------

console.log('latihan 1');

const buku = {
    judul : 'sabar itu iman',
    pengarang : 'ustd alhaitam',
    tahunTerbit: '1992',
    harga : 100000,
    tersedia: true,

    info: function(){
        return `judul: ${this.judul}, pengarang ${this.pengarang}, terbit: ${this.tahunTerbit}, harga : ${this.harga}, tersedia: ${this.tersedia}`;
    },
    
    diskon: function(persen){
        return this.harga * (1 - persen / 100);
    }
};

const koleksiBuku = [
    {
        judul : 'resep dessert ala koki',
        pengarang : 'chef escofier',
        tahunTerbit: '2026',
        harga : 900000,
        tersedia: true,

    info: function(){
        return `judul: ${this.judul}, pengarang ${this.pengarang}, terbit: ${this.tahunTerbit}, harga : ${this.harga}, tersedia: ${this.tersedia}`;
    }
},

{
    judul : 'cara menjadi ahli dalam theater',
    pengarang : 'actor furina',
    tahunTerbit: '2024',
    harga : 1000000,
    tersedia: false,

    info: function(){
        return `judul: ${this.judul}, pengarang ${this.pengarang}, terbit: ${this.tahunTerbit}, harga : ${this.harga}, tersedia: ${this.tersedia}`;
    }
},

{
    judul : 'cara menjamu teh jepang',
    pengarang : 'kamisato ayaka',
    tahunTerbit: '2021',
    harga : 15000000,
    tersedia: false,

    info: function(){
        return `judul: ${this.judul}, pengarang ${this.pengarang}, terbit: ${this.tahunTerbit}, harga : ${this.harga}, tersedia: ${this.tersedia}`;
    }
}
];

koleksiBuku.forEach(function(buku){
    console.log(buku.info());
});

const bukuTersedia = koleksiBuku.filter(function(buku){
     return buku.tersedia === true;
});

console.log('buku yang tersedia:');
bukuTersedia.forEach(function(buku){
    console.log(buku.info());
});
