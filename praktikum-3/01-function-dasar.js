//1. function tanpa parameter dan return
function sapa() {
    console.log('Halo! selamat datang di praktikum JavaScript');
}
sapa();
sapa();


//2. dengan parameter

function sapaNama(nama) {
    console.log(`Halo, ${nama}! Selamat belajar.`);
}
sapaNama('Budi');
sapaNama('Siti');

// beberapa parameter dan return value

function tambah(angka1, angka2) {
        const hasil = angka1 + angka2;
        return hasil;
}

const hasilPenjumlahan = tambah(10,25);
console.log('10 + 25 =', hasilPenjumlahan);
console.log('7 + 13 =', tambah(7,13));

function hitung(nilai, pengali = 2){
    return nilai * pengali;
}
console.log(hitung(5));
console.log(hitung(5,3));

const pesanGlobal = 'Saya ada di mana saja';

function cekScope(){
    const pesanLokal = 'Saya hanya ada di dalam function ini';
    console.log(pesanGlobal);
    console.log(pesanLokal);
}

cekScope();
console.log(pesanGlobal);

// latihan 1
console.log('latihan 1');

function kurang(a,b){
    const hasil = a - b;
    return hasil;
}

function kali(a,b){
    const hasil = a * b;
    return hasil;
}

function bagi(a,b){
     if(b == 0){
    console.log('error: tidak bisa membagi dengan noll');
    return null;
}
 return a / b;
}


const hasilPengurangan = kurang(6,3);
console.log('6 - 3 =', hasilPengurangan);

const hasilPengalian = kali(6,3);
console.log('6 * 3 =', hasilPengalian);

const hasilPembagian = bagi(6,3);
console.log('6/3 = ', hasilPembagian);

console.log('KALKULATOR')

function kalkulator(a, operator, b){
    let hasil; 

    switch (operator){
        case '+':
            hasil = tambah(a,b);
            break;
        case '-':
            hasil = kurang(a,b);
            break;
        case '*':
            hasil = kali(a,b);
            break;
        case '/':
            hasil = bagi(a,b);
            break;
        default:
            return "operator tidak valid";

    }
    return hasil;

}

console.log(kalkulator(6,'+',8));
console.log(kalkulator(5,'-',5));
console.log(kalkulator(5,'*',5));
console.log(kalkulator(6,'/',3));
console.log(kalkulator(9,'/',0));
