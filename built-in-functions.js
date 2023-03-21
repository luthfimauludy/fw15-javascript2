// new Date()
// untuk mengembalikan representasi string dari tanggal dan waktu saat ini
const date1 = new Date("March 21, 2023 17:11:00");
console.log(date1);

// Array.from()
// metode statis membuat instance array baru yang disalin dari objek yang dapat dirubah jadi per huruf
console.log(Array.from("Bogor"));

// Array.isArray()
// metode statis menentukan apakah nilai yang diteruskan adalah array
console.log(Array.isArray([1, 2, 3]));

// toLowerCase()
// metode mengembalikan nilai string yang dikonversi ke huruf kecil
const name = "Budi Rahayu";
console.log(name.toLowerCase());

// toUpperCase()
// metode mengembalikan nilai string yang dikonversi ke huruf besar
console.log(name.toUpperCase());

// split()
// metode mengambil pola dan membagi string ke dalam substring yang diurutkan dengan mencari polanya, menempatkannya ke dalam array dan mengembalikan array
console.log(name.split(" "));

// trim()
// metode menghapus spasi dari kedua ujung kiri dan kanan string dan mengembalikan string baru, tanpa memodifikasi string asli
const trim = "    Budi Rahayu   ";
console.log(trim.trim());

// freeze()
// metode membekukan objek untuk mencegah proses perubahan value
const person = {
  firstName: "Bagus",
  lastName: "Rahayu",
};
Object.freeze(person);
person.firstName = "Ari";
console.log(person);

// seal()
// metode menyegel objek untuk mencegah proses penghapusan value
Object.seal(person);
delete person.lastName;
console.log(person);

// values()
// metode statis mengembalikan array dari nilai properti yang dapat dihitung sendiri dari objek tertentu
console.log(Object.values(person));
