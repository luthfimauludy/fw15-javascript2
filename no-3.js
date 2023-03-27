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

function searchName(include, limit, cb) {
  const result = [];

  // buat perulangan
  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    // lakukan pengkondisian berisikan variable name dirubah menjadi huruf kecil dan yang termasuk dalam teks include yang akan dimasukkan
    // lalu jika sesuai result akan menambahkan name nya
    if (name.toLowerCase().includes(include)) {
      result.push(name);
    }
  }
  // untuk memanggil result dan membatasinya menggunakan slice()
  cb(result.slice(0, limit));
}

// buat function callback untuk menampilkan result
function callback(result) {
  console.log(result);
}

searchName("an", 3, callback);
