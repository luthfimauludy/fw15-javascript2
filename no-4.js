function seleksiNilai(nilaiAwal, nilaiAKhir, dataArray) {
  const result = [];

  if (nilaiAwal > nilaiAKhir) {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  } else if (dataArray.length < 5) {
    console.log("Jumlah angka dalam data Array harus lebih dari 5");
  } else {
    for (let i = 0; i < dataArray.length; i++) {
      const number = dataArray[i];
      if (number > nilaiAwal && number < nilaiAKhir) {
        result.push(number);
      }
    }

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

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(4, 17, [2, 25, 4]);
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);
