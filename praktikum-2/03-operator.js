// operator aritmatika

let a = 17;
let b = 5;

console.log('== aritmatika==');
console.log(`${a} + ${b} = ${a + b}`); 
console.log(`${a} - ${b} = ${a - b}`); 
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`); 
console.log(`${a} % ${b} = ${a % b}`); 

// operator perbandingan
console.log('== perbandingan ==');
console.log('10 > 5 :', 10 > 5);
console.log('10 < 5 :', 10 < 5);
console.log('10 >= 10 :', 10 >= 10);
console.log('10 <= 9 :', 10 <= 9);

//perbedaan ==  dan ===
console.log('--- perbedaan == dan === ---');
console.log('5 == "5" :', 5 == '5'); // true (JANGAN gunakan ini!)
console.log('5 === "5" :', 5 === '5'); // false (SELALU gunakan ini)
console.log('5 !== 3 :', 5 !== 3);

// operator logika
console.log('logika');
let sudahMakan = true;
let punyaUang = false;

// AND (&&): kedua kondisi harus true
console.log('Makan && Uang :', sudahMakan && punyaUang); // false

// OR (||): salah satu kondisi cukup true
console.log('Makan || Uang :', sudahMakan || punyaUang); // true

// NOT (!): membalik nilai boolean
console.log('!sudahMakan :', !sudahMakan); // false
console.log('!punyaUang :', !punyaUang);

// latihan 1
console.log('Latihan 1');
console.log('==========');
const panjang = 52;
const lebar = 10;

const luas = panjang * lebar;
const keliling = 2 * (panjang + lebar);

console.log(`Luas persegi panjang: ${luas}`);
console.log(`Keliling persegi panjang: ${keliling}`);

const isLebihBesarDari100 = luas > 100;
console.log(`Apakah luas lebih besar dari 100? ${isLebihBesarDari100}`);