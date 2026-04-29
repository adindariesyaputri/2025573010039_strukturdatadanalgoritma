// FUNGSI A
// Intersection dua array
// Versi O(n^2) dan O(n) menggunakan Set

// Versi Lambat → O(n^2)
function intersectionLambat(arr1, arr2) {
    const hasil = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !hasil.includes(arr1[i])) {
                hasil.push(arr1[i]);
            }
        }
    }

    return hasil;
}

// Big O:
// Time  : O(n^2)
// Space : O(n)


// Versi Cepat → O(n) menggunakan Set
function intersectionCepat(arr1, arr2) {
    const setArr2 = new Set(arr2);

    return [...new Set(arr1.filter(item => setArr2.has(item)))];
}

// Big O:
// Time  : O(n)
// Space : O(n)


console.log("\n=== Fungsi A: Intersection ===");

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log("Versi Lambat:", intersectionLambat(array1, array2));
console.log("Versi Cepat :", intersectionCepat(array1, array2));
 
// FUNGSI B
function kelompokAnagram(words) {
    const map = {};

    for (let word of words) {
        const key = word.split('').sort().join('');

        if (!map[key]) {
            map[key] = [];
        }

        map[key].push(word);
    }

    return Object.values(map);
}

// Big O:
// Time  : O(n log n)
// Space : O(n)
console.log(" Fungsi B: Kelompok Anagram ");
const kata = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(kelompokAnagram(kata));

// FUNGSI C
// Three Sum → apakah ada 2 elemen
// yang jumlahnya sama dengan elemen ketiga

// Versi Sederhana O(n^3)
function adaThreeSumLambat(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (
                    i !== j &&
                    j !== k &&
                    i !== k &&
                    arr[i] + arr[j] === arr[k]
                ) {
                    return true;
                }
            }
        }
    }

    return false;
}
// Big O:
// Time  : O(n^3)
// Space : O(1)

// Versi Lebih Cepat O(n log n)
function adaThreeSumCepat(arr) {
    arr.sort((a, b) => a - b);

    for (let k = arr.length - 1; k >= 0; k--) {
        let kiri = 0;
        let kanan = k - 1;

        while (kiri < kanan) {
            const jumlah = arr[kiri] + arr[kanan];

            if (jumlah === arr[k]) {
                return true;
            } else if (jumlah < arr[k]) {
                kiri++;
            } else {
                kanan--;
            }
        }
    }

    return false;
}

// Big O:
// Time  : O(n log n)
// Space : O(1)

console.log("\n=== Fungsi C: Three Sum ===");

const angka = [1, 2, 3, 5, 8];

console.log("Versi Lambat:", adaThreeSumLambat(angka));
console.log("Versi Cepat :", adaThreeSumCepat(angka));