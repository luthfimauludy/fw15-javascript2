function seleksiNilai(nilaiAwal, nilaiAKhir, dataArray) {
  let result = [];

  // buat pengkondisian nilai akhir harus lebih besar dari nilai awal
  // dan jumlah angka dalam data array harus lebih dari 5
  if (nilaiAwal > nilaiAKhir) {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  } else if (dataArray.length < 5) {
    console.log("Jumlah angka dalam data Array harus lebih dari 5");
  } else {
    // lalu buat pengulangan jumlah data array ditambah 1,
    // di dalamnya buat pengkondisian lagi untuk menentukan nilai dalam array yang akan ditampilkan
    for (let i = 0; i < dataArray.length; i++) {
      const number = dataArray[i];
      if (number > nilaiAwal && number < nilaiAKhir) {
        result = [...result, dataArray[i]];
        // result.push(number); // harusnya menggunakan spread operator
      }
    }

    // buat pengkondisian kembali untuk menentukan nilai kosong
    if (result.length === 0) {
      console.log("Nilai tidak ditemukan");
    } else {
      result.sort(function (a, b) {
        return a - b;
      });
      console.log(result);
    }
  }
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]); // panggil function
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(4, 17, [2, 25, 4]);
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);
