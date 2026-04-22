class Produk {
    constructor(id, nama, harga, stok) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    info() {
        console.log(`ID: ${this.id}`);
        console.log(`Nama: ${this.nama}`);
        console.log(`Harga: Rp ${this.harga}`);
        console.log(`Stok: ${this.stok}`);
    }

    tersedia() {
        return this.stok > 0;
    }

    jual(jumlah) {
        if (jumlah <= this.stok) {
            this.stok -= jumlah;
            console.log(`${jumlah} ${this.nama} berhasil dijual`);
        } else {
            console.log(`Stok ${this.nama} tidak mencukupi`);
        }
    }
}

class ProdukDigital extends Produk {
    constructor(id, nama, harga, stok, ukuranFile, formatFile) {
        super(id, nama, harga, stok);
        this.ukuranFile = ukuranFile;
        this.formatFile = formatFile;
    }

    info() {
        super.info();
        console.log(`Ukuran File: ${this.ukuranFile} MB`);
        console.log(`Format File: ${this.formatFile}`);
        console.log('Jenis: Produk Digital');
        console.log('----------------------');
    }

    download() {
        console.log(`Mengunduh ${this.nama}...`);
    }

    jual(jumlah) {
        console.log(`${this.nama} adalah produk digital, tidak mengurangi stok`);
    }
}

class ProdukFisik extends Produk {
    constructor(id, nama, harga, stok, beratGram, dimensi) {
        super(id, nama, harga, stok);
        this.beratGram = beratGram;
        this.dimensi = dimensi;
    }

    info() {
        super.info();
        console.log(`Berat: ${this.beratGram} gram`);
        console.log(`Dimensi: ${this.dimensi}`);
        console.log('Jenis: Produk Fisik');
        console.log('----------------------');
    }

    hitungOngkir(tarifPerKg) {
        const beratKg = this.beratGram / 1000;
        return beratKg * tarifPerKg;
    }
}

const produk1 = new ProdukDigital(1, 'Ebook JavaScript', 50000, 999, 5, 'PDF');
const produk2 = new ProdukDigital(2, 'Template Website', 75000, 999, 20, 'ZIP');

const produk3 = new ProdukFisik(3, 'Mouse Gaming', 150000, 10, 300, '10x5x3 cm');
const produk4 = new ProdukFisik(4, 'Keyboard Mechanical', 500000, 5, 800, '45x15x5 cm');

const daftarProduk = [produk1, produk2, produk3, produk4];

console.log('Semua Produk');
daftarProduk.forEach(produk => {
    produk.info();
});

console.log(' Produk Tersedia');
const produkTersedia = daftarProduk.filter(produk => produk.tersedia());

produkTersedia.forEach(produk => {
    console.log(produk.nama);
});

console.log('Nama Produk');
const namaProduk = daftarProduk.map(produk => produk.nama);

console.log(namaProduk);