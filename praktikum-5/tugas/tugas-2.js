// Fungsi O(1)
// hanya 1 operasi tetap
// Big O Time : O(1)
function fn_O1(n) {
    return n + 1;
}

// Fungsi O(n)
// loop sebanyak n kali
// Big O Time : O(n)
function fn_On(n) {
    let jumlah = 0;

    for (let i = 0; i < n; i++) {
        jumlah += i;
    }

    return jumlah;
}

// Fungsi O(n log n)
// loop luar = n
// loop dalam = log2(n)
// Big O Time : O(n log n)
function fn_OnLogn(n) {
    let jumlah = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j *= 2) {
            jumlah += j;
        }
    }

    return jumlah;
}

// Fungsi O(n^2)
// nested loop n × n
// Big O Time : O(n^2)
function fn_On2(n) {
    let jumlah = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            jumlah += i + j;
        }
    }

    return jumlah;
}

// Function benchmark semua
function benchmarkSemua(ukuranData) {
    ukuranData.forEach(n => {
        console.log(`\n=== Ukuran Data: ${n} ===`);

        let start, end;

        // O(1)
        start = Date.now();
        fn_O1(n);
        end = Date.now();
        console.log(`fn_O1 (O(1))       : ${end - start} ms`);

        // O(n)
        start = Date.now();
        fn_On(n);
        end = Date.now();
        console.log(`fn_On (O(n))       : ${end - start} ms`);

        // O(n log n)
        start = Date.now();
        fn_OnLogn(n);
        end = Date.now();
        console.log(`fn_OnLogn (O(nlogn)): ${end - start} ms`);

        // O(n^2)
        start = Date.now();
        fn_On2(n);
        end = Date.now();
        console.log(`fn_On2 (O(n^2))    : ${end - start} ms`);
    });
}

// Jalankan benchmark
benchmarkSemua([100, 500, 1000, 5000, 10000]);

// Kesimpulan

/*
Hasil yang diamati:

1. fn_O1 (O(1))
   Waktu eksekusi hampir selalu tetap,
   tidak terlalu berubah walaupun n bertambah besar.

2. fn_On (O(n))
   Waktu bertambah secara linear,
   semakin besar n maka waktu juga bertambah perlahan.

3. fn_OnLogn (O(n log n))
   Lebih lambat dari O(n),
   tetapi masih jauh lebih cepat dari O(n^2).

4. fn_On2 (O(n^2))
   Pertumbuhan waktu sangat cepat,
   terutama saat n besar seperti 5000 dan 10000.

Kesimpulan:
Hasil benchmark konsisten dengan teori Big O.
Semakin tinggi kompleksitas algoritma,
semakin besar waktu eksekusinya saat data bertambah besar.
*/