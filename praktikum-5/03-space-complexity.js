function jumlahArray(arr){
    let total = 0;
    for (const x of arr) total += x;
    return total;
}

function duplikasiArray(arr){
    const baru = [];
    for(const x of arr) baru.push(x * 2);
    return baru;
}

function faktorialRekursif(n){
    if(n <= 1) return 1;
    return n *faktorialRekursif(n - 1);
}

function faktorialIteratif(n){
    let hasil = 1;
    for (let i = 2; i < n; i++) hasil *= i;
    return hasil;
}

const arr = [1,2,3,4,5,6,7,8,9,10];

console.log('jumlah array : ', jumlahArray(arr));
console.log('duplikasi array :', duplikasiArray(arr));
console.log('faktorial 10 rekursif :', faktorialRekursif(10));
console.log('faktorial 10 iteratif :', faktorialIteratif(10));

function hitungUnik(arr){
    const seen = new Set();
    for (const x of arr ) seen.add(x);
    return seen.size;
}

const dataAcak = [1,2,3,2,1,4,5,6,4,7];
console.log('elemen unik :', hitungUnik(dataAcak));

//===============================================================================
console.log('---------------------------------------------------latihan 3----------------------------------------------------------------');
// big O(n^2), karena dua loop bersarang
//big O space, O(1) karena tidak menggunakan struktur data tambahan seperti Set
function cariPasanganLambat(arr, target){
    for (let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
             if (arr[i] + arr[j] === target){
            return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

// big O(n), karena hanya ada satu loop
//big O space, O(n) karena menggunakan Set untuk menyimpan data nya.

function cariPasanganCepat(arr, taget){
    const set = new Set();
    for(let num of arr){
        const pasangan = target - num;
        if(set.has(pasangan)){
            return [pasangan, num];
        }
        set.add(num);
    }
    return null;
}


const data = [2,7,11,15];
const target = 9;

console.log('lambat :', cariPasanganLambat(data, target));
console.log('cepat :', cariPasanganCepat(data,target));

function ukurWaktu(fn, arr, target){
    const start = Date.now();
    fn(arr, target);
    const end = Date.now();
    return end - start;
}

const arrBesar = Array.from({length: 5000}, () => Math.floor(Math.random() * 100000));
const targetBesar = -1;

console.log('lambat: ', ukurWaktu(cariPasanganLambat, arrBesar, targetBesar), 'ms');
console.log('cepat: ', ukurWaktu(cariPasanganCepat, arrBesar, targetBesar), 'ms');

console.log('bisa dilihat dari hasil nya bahwa cariPasanganCepat lebih baik.');
console.log('secara teori pun, big O(n) lebih cepat daripada Big O(n^2)');
console.log('---trade off nya atau kelebihan dan kekurangan nya---');
console.log('cariPasanganLambat memiliki keuntungan, dia tidak membutuhkan memori tambahan. namun dia sangat lambat untuk data yang besar');
console.log('cariPasnaganLambat cocok untuk cata yang kecil. karena simpel dan data yang ada dikit jadi hanya membutuhkan sedikit waktu untuk eksekusi nya');
console.log('sedangkan cariPasanganCepat memiliki keuntungan dimana dia itu cepat untuk data yang besar. namun membutuhkan memori tambahan yaitu Set. ');
console.log('carPasanganCepat cocok untuk data yang besar karna dia tidak mencari nilai yang ada satu per satu melain kan  ');
