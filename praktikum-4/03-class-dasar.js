class Mahasiswa {
    constructor(nama, nim, jurusan){
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.nilai = []; 
    }

    tambahNilai(nilai){
        this.nilai.push(nilai);
    }

    hitungRataRata(){
        if(this.nilai.length === 0) return 0;
        const total = this.nilai.reduce((sum,n) => + n,0);
        return (total / this.nilai.length).toFixed(2);
    }

    getInfo(){
        return `[${this.nim}] ${this.nama} - ${this.jurusan} | ipk : ${this.hitungRataRata()}`;
    }
}

const mhs1 = new Mahasiswa('kiana', '20168293', 'physical valkeyrie');
const mhs2 = new Mahasiswa('mei', '20168191', 'physical valkeyrie');
const mhs3 = new Mahasiswa('bronya', '20168190', 'robot valkeyrie');

mhs1.tambahNilai(20); mhs1.tambahNilai(10); mhs1.tambahNilai(20);
mhs2.tambahNilai(90); mhs2.tambahNilai(100); mhs2.tambahNilai(98);
mhs3.tambahNilai(98); mhs3.tambahNilai(99); mhs3.tambahNilai(100);

console.log('data mahasiswa');
console.log(mhs1.getInfo());
console.log(mhs2.getInfo());
console.log(mhs3.getInfo());

class kalkulator{
    static tambah (a, b) {return a + b; }
    static kurang (a, b) {return a - b; }
    static kali (a, b) {return a * b; }
    static bgi (a, b) {
        if (b === 0) return 'error : bagi nol'
        return a / b;
     }
    }

class Lingkaran {
    constructor(jariJari){
        this._jariJari = jariJari;
    }

    get jariJari(){ return this._jariJari;}
    get luas(){ return (Math.PI * this._jariJari ** 2).toFixed(2);}
    get keliling(){ return (2 * Math.PI* this._jariJari).toFixed(2);}

    set jariJari(nilai){
        if(nilai <= 0) throw new Error('jari-jari harus posistif!');
        this._jariJari = nilai;
    }
}

console.log('Getter dan setter');
const l = new Lingkaran(7);
console.log('jari-jari:', l.jariJari);
console.log('keliling :', l.keliling);
console.log('luas :', l.luas);
l.jariJari = 10;
console.log('setelah diubah-luas:', l.luas);

console.log('latihan 3');

class BankAccount {
    constructor(namaPemilik, saldoAwal = 0){
        this.namaPemilik = namaPemilik;
        this.saldo = saldoAwal;
    }

    setor(jumlah){
        if(jumlah <= 0){
            console.log('jumlah setor harus lebih dari 0');
            return;
        }

        this.saldo += jumlah;
        console.log(`setor berhasil: Rp${jumlah}`);
    }

    tarik(jumlah){
        if(jumlah <= 0 ){
            console.log('jumlah tarik harus lebih dari 0');
            return;
        }

        if(jumlah > this.saldo){
            console.log('saldo tidak mencukupi');
            return;
        }

        this .saldo -= jumlah;
        console.log(`tarik berhasil : Rp${jumlah}`);
    }

    cekSaldo(){
        console.log(`pemilik: ${this.namaPemilik} | saldo: ${this.saldo}`);
    }

    static transfer(akun1,akun2,jumlah){
        if(jumlah <= 0 ){
            console.log('jumlah tranfer tidak valid');
            return;
        }

        if(jumlah > akun1.saldo){
            console.log('transfer gagas: saldo tidak mencukupi');
            return;
        }

        akun1.tarik(jumlah);
        akun2.setor(jumlah);

        console.log('transfer berhasil');
    }
}

const akun1 =  new BankAccount ('aventurine',100000);
const akun2 = new BankAccount ('lyuuci', 50000);

akun1.cekSaldo();
akun2.cekSaldo();

akun1.setor(50000);
akun1.cekSaldo();

akun1.tarik(20000);
akun1.cekSaldo();

akun1.tarik(200000);
akun1.setor(-1000);

BankAccount.transfer(akun1,akun2, 30000);

akun1.cekSaldo();
akun2.cekSaldo();

BankAccount.transfer(akun1, akun2, 500000);