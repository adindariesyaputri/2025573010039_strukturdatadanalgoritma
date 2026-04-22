class Kendaraan{
    constructor(merk, model, tahun){
        this.merk = merk;
        this.tahun = tahun;
        this.model = model;
        this.kecepatanSaatIni = 0;
    }

    akselerasi(tambah){
        this.kecepatanSaatIni += tambah;
        console.log(`${this.merk} ${this.model} : kecepatan ${this.kecepatanSaatIni} km/h`);
    }

    rem(){
        this.kecepatanSaatIni = 0;
        console.log(`${this.merk} ${this.model} : berhenti`);
    }
    
    info(){
        return `${this.tahun} ${this.merk} ${this.model}`;
    }
}

class Mobil extends Kendaraan {
    constructor(merk, model, tahun, jumlahPintu) {
        super(merk, model, tahun);
        this.jumlahPintu = jumlahPintu;
    }

    bunyikanKlakson(){
        console.log(`${this.merk}: Beep Beep!`);
    }

    info(){
        const infoParent = super.info();
        return `${infoParent} (${this.jumlahPintu} pintu)`;
    }
}

class Motor extends Kendaraan {
    constructor(merk, model, tahun, jenisMotor){
        super(merk, model, tahun);
        this.jenisMotor = jenisMotor;
    }

    wheelie(){
        if (this.kecepatanSaatIni > 50){
            console.log(`${this.merk}: wheelie!`);
        }else{
            console.log('kecepatan terlallu rendah untuk wheelie');
        }
    }

    info(){
        return `${super.info()} [${this.jenisMotor}]`;
    }
}

const mobil = new Mobil('toyota', 'avanza', 2022,4);
const motor = new Motor('honda', 'CBR600RR', 2021, 'sport');

console.log('info kendaraan');
mobil.akselerasi(60);
mobil.bunyikanKlakson();
motor.akselerasi(80);
motor.wheelie();
motor.rem();

console.log('instanceof');
console.log('mobil instanceof Mobil : ', mobil instanceof Mobil);
console.log('mobil instanceof Kendaraan : ', mobil instanceof Kendaraan);
console.log('moto instanceof mobil : ', motor instanceof Mobil);

console.log('polymorphism');
const semuaKendaraan = [mobil, motor];
semuaKendaraan.forEach(k => console.log(k.info()));

//-----------------------------------------------------------------------------------------//
console.log('latihan 4')

class Hewan{
    constructor(nama, suara){
        this.nama = nama;
        this.suara = suara;
    }

    bersuara(){
        console.log(`${this.nama} berkata: ${this.suara}`);
    }

    info(){
        console.log(`nama: ${this.nama}`);
    }
}

class Anjing extends Hewan {
    fetch(){
        console.log(`${this.nama} mengambil bola!`);
    }

    info(){
        console.log(`nama: ${this.nama} (jenis: anjing)`);
    }
}

class Kucing extends Hewan {
    cakarSofa(){
        console.log(`${this.nama} mencakar sofa!`);
    }

    bersuara(){
        super.bersuara();
        console.log('puuuurrrrr......');
    }
}

const anjing1 = new Anjing('buddy', 'guk guk');
const anjing2 = new Anjing('Hoyo', 'Bark Bark');

const kucing1 = new Kucing('beti', 'meoww meoww');
const kucing2 = new Kucing('phainon', 'mrauw');

const daftarHewan = [anjing1, anjing2, kucing1, kucing2];

daftarHewan.forEach(hewan => {
    hewan.bersuara();
    hewan.info();
    console.log('--------------');
});

anjing1.fetch();
kucing1.cakarSofa();