//---- 1. STRING (TEKS) ------
let namaMahasiswa = 'Ahamad Fauzi';
let programStudi = "Teknik Informatika";
let perkenalan = `Halo! nama saya ${namaMahasiswa} dari ${programStudi}.`;
console.log(perkenalan);
console.log('Panjang nama:', namaMahasiswa.length);

//----- 2. NUMBER -----
let NilaiUjian = 95;
let ipk        = 3.75;
let suhuKulkas = -4;

console.log('Nilai Ujian :', NilaiUjian);
console.log('IPK         :', ipk);
console.log('Suhu Kulkas :', suhuKulkas);

//--- 3. BOOLEAN (TRUE/FALSE)
let sudahLogin = true;
let sudahLulus = false;

console.log('Sudah login :', sudahLogin);
console.log('sudah lulus :', sudahLulus);

//--- 4. null

let fotoProfil = null; //belum ada foto
console.log('Foto profil:', fotoProfil);

// -- 5. undefined
let nomorTelepon;
console.log('No.Telepon:', nomorTelepon);

//-- mnegecek tipe data dengan typeof---

console.log(' tipe data');
console.log('namaMahasiswa :', typeof namaMahasiswa); 
console.log('nilaiUjian :', typeof NilaiUjian); 
console.log('sudahLogin :', typeof sudahLogin); 
console.log('fotoProfil :', typeof fotoProfil); 
console.log('nomorTelepon :', typeof nomorTelepon);