// var
// adalah keyword yang digunakan untuk mendeklarasikan variable yang memiliki cakupan global
// var bisa berulang kalli dideklarasi dan diperbaharui di manapun scopenya
// contoh penggunaan var
var firstName = "Budi"; // global scope
var firstName = "Andre";

function fullName() {
  // local scope
  var lastName = "Joyo";
  console.log(lastName);
}
fullName(); // outputnya adalah "Joyo"
// console.log(lastName); // error karena berada di local scope
console.log(firstName); // outputnya adalah "Andre" karena sudah dideklarasikan ulang dan diperbaharui

// let
// adalah keyword yang sama seperti var digunakan untuk mendeklarasikan variable. Perbedaannya hanya dalam jangkauan scopenya saja
// let tidak bisa dideklarasikan ulang tetapi dapat diperbaharui
// contoh penggunaan let
// let firstName = "Budi"; // global scope
// // let firstName = "Andre"; // error
// firstName = "Andre"; // bisa diperbaharui tanpa di deklarasikan ulang

// function fullName() {
//   // local scope
//   let lastName = "Joyo";
//   console.log(lastName);
// }
// fullName(); // outputnya adalah "Joyo"
// // console.log(lastName); // error karena berbeda scope
// console.log(firstName); // outputnya adalah "Andre" karena sudah diperbaharui

// const
// adalah keyword yang sama seperti var dan let digunakan untuk mendeklarasikan variable.
// const tidak dapat dideklarasikan ulang maupun diperbaharui
// contoh penggunaan const
// const firstName = "Budi";
// // const firstName = "Andre" // error tidak bisa dideklarasikan ulang
// // firstName = "Andre"; // error tidak bisa diperbaharui

// function fullName() {
//   // local scope
//   const lastName = "Joyo";
//   console.log(lastName);
// }
// fullName(); // outputnya adalah "Joyo"
// // console.log(lastName); // error karena berbeda scope
// console.log(firstName); // outputnya adalah "Budi"
