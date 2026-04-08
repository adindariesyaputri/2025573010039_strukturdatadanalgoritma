// for loop
//struktur: for (inisialisasi; kondisi;update)
console.log('for loop : hitung 1 sampai 5');
for (let i = 1; i <= 5; i++){
    console.log(`iterasi ke ${i}`, i);
}

//while loop
console.log('while loop : countdown');
let hitung = 5;
while (hitung > 0){
    console.log(`hitung mundur: ${hitung}` );
    hitung--;
}
console.log('selesai');

//for loop
console.log('\n=== Bilangan Genap antara 1 - 20 ===');
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) { 
    process.stdout.write(i + ' ');
    }
}
console.log('');

//break dan continue
console.log('\n=== Break dan Continue ===');
for (let i = 1; i <= 10; i++) {
    if (i === 4) {
console.log(`Melewati angka ${i} (continue)`);
    continue;
}
if (i === 8) {
console.log(`Berhenti di angka ${i} (break)`);
    break; 
}
console.log(`Angka: ${i}`);
}

//latihan 3
console.log('latihan 3');

console.log("Bagian A: Segitiga Bintang");

for (let i = 1; i <= 5; i++) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
        baris += "*";
    }
    
    console.log(baris);
}

console.log("Bagian B: Bilangan Prima 1 sampai 50");

for (let i = 2; i <= 50; i++) {
    let apakahPrima = true;
for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            apakahPrima = false;
            break; // Berhenti mengecek jika sudah ketemu pembaginya
        }
    }

    // Jika setelah dicek tetap prima, tampilkan hasilnya
    if (apakahPrima) {
        process.stdout.write(i + " "); // Mencetak ke samping agar rapi
    }
}
console.log("");