const dataMahasiswa = [
    { nama: 'Albudi', nilai: 96 },
    { nama: 'Phainon', nilai: 88 },
    { nama: 'Stelle', nilai: 50 },
    { nama: 'Kiana', nilai: 90 },
    { nama: 'Caelus', nilai: 65 },
    { nama: 'Lyuuci', nilai: 90 }
];

function hitungStatistik(arrMahasiswa){

    let total = arrMahasiswa.length;
    let jumlah = 0;
    let tertinggi = arrMahasiswa[0].nilai;
    let terendah = arrMahasiswa[0].nilai;

    arrMahasiswa.forEach(function(m){
        jumlah += m.nilai;

        if(m.nilai > tertinggi){
            tertinggi = m.nilai;
        }

        if(m.nilai < terendah){
            terendah = m.nilai;
        }
    });

    return {
        total: total,
        rataRata: (jumlah / total).toFixed(2),
        tertinggi: tertinggi,
        terendah: terendah
    };
}


function filterLulus(arrMahasiswa, batasLulus){
    return arrMahasiswa.filter(function(m){
        return m.nilai >= batasLulus;
    });
}

function tambahGrade(arrMahasiswa){
    return arrMahasiswa.map(function(m){

        let grade;

        if(m.nilai >= 85){
            grade = 'A';
        } else if(m.nilai >= 75){
            grade = 'B';
        } else if(m.nilai >= 65){
            grade = 'C';
        } else if(m.nilai >= 50){
            grade = 'D';
        } else {
            grade = 'E';
        }

        return {
            nama: m.nama,
            nilai: m.nilai,
            grade: grade
        };

    });
}

const statistik = hitungStatistik(dataMahasiswa);
const lulus = filterLulus(dataMahasiswa, 75);
const denganGrade = tambahGrade(dataMahasiswa);

console.log("=== DATA MAHASISWA ===");
dataMahasiswa.forEach(function(m, i){
    console.log((i+1) + ". " + m.nama + " - " + m.nilai);
});

console.log("\n=== STATISTIK ===");
console.log("Total Mahasiswa :", statistik.total);
console.log("Rata-rata :", statistik.rataRata);
console.log("Tertinggi :", statistik.tertinggi);
console.log("Terendah :", statistik.terendah);


console.log("\n=== MAHASISWA LULUS ===");
lulus.forEach(function(m, i){
    console.log((i+1) + ". " + m.nama + " - " + m.nilai);
});


console.log("\n=== DATA DENGAN GRADE ===");
denganGrade.forEach(function(m, i){
    console.log((i+1) + ". " + m.nama + " - " + m.nilai + " (Grade " + m.grade + ")");
});