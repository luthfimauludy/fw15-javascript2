// slice()
// metode mengembalikan salinan dari sebagian array ke objek array baru yang dipilih dari awal hingga akhir(akhir tidak termasuk)
// awal dan akhir mewakili indeks item dari array tersebut
const fruits = ["orange", "apple", "peach", "starfruit"];
console.log(fruits.slice(1, 3));

// map()
// metode membuat array baru yang diisi dengan hasil pemanggilan fungsi yang disediakan pada setiap elemen dalam array panggilan
const array = [1, 2, 3, 4, 5];
const map = array.map((x) => x * 5);
console.log(map);

// toLowerCase()
// metode mengembalikan nilai string yang dikonversi ke huruf kecil
const name = "Budi Rahayu";
console.log(name.toLowerCase());

// toUpperCase()
// metode mengembalikan nilai string yang dikonversi ke huruf besar
console.log(name.toUpperCase());

// split()
// metode mengambil pola dan membagi string ke dalam substring yang diurutkan dengan mencari polanya,
// menempatkannya ke dalam array dan mengembalikan array
console.log(name.split(" "));

// trim()
// metode menghapus spasi dari kedua ujung kiri dan kanan string dan mengembalikan string baru, tanpa memodifikasi string asli
const trim = "    Budi Rahayu   ";
console.log(trim.trim());

// includes()
// metode menentukan apakah array menyertakan nilai tertentu diantara entri-entrinya dan mengembalikan nilai true atau false
console.log(fruits.includes("orange"));

// push()
// metode menambahkan satu atau lebih element ke akhir array dan mengembalikan panjang array yang baru
fruits.push("strawberry");
console.log(fruits);

// reverse()
// metode membalikkan array dan mengembalikan ke array yang sama
const reversed = fruits.reverse();
console.log(reversed);

// sort()
// metode mengurutkan elemen array dan mengembalikan ke array yang sama
const sorted = fruits.sort();
console.log(sorted);

// join()
// metode membuat dan mengembalikan string baru dengan menggabungkan semua elemen dalam array,
// dipisahkan dengan koma atau string pemisah
console.log(fruits.join());
