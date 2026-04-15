function pangkat(basis, eksponen) {
    // base case
    if (eksponen === 0) {
        return 1;
    }
    return basis * pangkat(basis, eksponen - 1);
}

console.log("Pangkat:");
console.log(pangkat(2, 3));
console.log(pangkat(5, 2)); 
console.log(pangkat(3, 4)); 

function balikString(str) {
    if (str.length <= 1) {
        return str;
    }

    return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

console.log("\nBalik String:");
console.log(balikString("halo"));
console.log(balikString("javascript")); 

function cekPalindrom(str) {
    return str === balikString(str);
}

console.log("\nCek Palindrom:");
console.log("katak:", cekPalindrom("katak"));
console.log("civic:", cekPalindrom("civic"));
console.log("level:", cekPalindrom("level"));
console.log("halo:", cekPalindrom("halo"));