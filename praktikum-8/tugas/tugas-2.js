function subArrayJumlahK(arr, k) {
    const map = new Map();
    map.set(0, 1);

    let sum = 0;
    let count = 0;

    for (let num of arr) {
        sum += num;

        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}

function karakterPertamaUnik(str) {
    const freq = new Map();

    for (let char of str) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    for (let i = 0; i < str.length; i++) {
        if (freq.get(str[i]) === 1) {
            return i;
        }
    }

    return -1;
}

function topKFrequent(arr, k) {
    const freq = new Map();

    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    return [...freq.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(item => item[0]);
}

console.log("Nomor 1");
console.log(subArrayJumlahK([1, 1, 1], 2));

console.log("\nNomor 2");
console.log(karakterPertamaUnik("leetcode"));

console.log("\nNomor 3");
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

// BIG O
// subArrayJumlahK
// Time Complexity  : O(n)
// Space Complexity : O(n)

// karakterPertamaUnik
// Time Complexity  : O(n)
// Space Complexity : O(n)

// topKFrequent
// Time Complexity  : O(n log n)
// Space Complexity : O(n)