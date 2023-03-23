const names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

function searchName(include, limit, callback) {
  const result = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    // lakukan pengkondisian berisikan variable name dirubah menjadi huruf kecil dan yang termasuk dalam teks include yang akan dimasukkan
    // lalu jika sesuai result akan menambahkan name nya
    if (name.toLowerCase().includes(include)) {
      result.push(name);
    }
  }
  // buat function callback untuk memanggil result dan membatasinya menggunakan slice
  callback(result.slice(0, limit));
}

// menampilkan result dengan menggunakan function callback
function callback(result) {
  console.log(result);
}

searchName("an", 3, callback);
