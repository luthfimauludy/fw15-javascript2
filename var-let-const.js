// var
// adalah keyword yang digunakan untuk mendeklarasikan variable yang memiliki cakupan global
// var bisa dideklarasikan ulang dan diperbaharui
// contoh penggunaan var
var firstName = "Budi"; // global scope

function fullName() {
  // local scope
  var firstName = "Andre";
  console.log(firstName); // output yang keluar adalah "Andre"

  if (firstName == "Andre") {
    // block scope
    var firstName = "Rudi";
  }
}
console.log(firstName); // output yang keluar adalah "Rudi"
// var bisa berulang kali dideklarasi dengan mengubah valuenya dan dimanapun scopenya

// let
// adalah keyword yang sama seperti var digunakan untuk mendeklarasikan variable. Perbedaannya hanya dalam jangkauan scopenya saja
// let tidak bisa dideklarasikan ulang tetapi dapat diperbaharui
// contoh penggunaan let
let firstName = "Budi"; // global scope

function fullName() {
  // local scope
  firstName = "Andre";
  console.log(firstName); // variable firstName dapat diperbaharui

  if (firstName == "Andre") {
    // block scope
    let firstName = "Rudi";
    console.log(firstName); // error tidak bisa dideklarasikan ulang
  }
}
console.log(firstName); // error
// karena variable lastName hanya mencakup pada bagian block scope saja
console.log(firstName); // outputnya adalah "Budi" bukan "Andre" karna berada di global scope

// const
// adalah keyword yang sama seperti var dan let digunakan untuk mendeklarasikan variable.
// const tidak dapat dideklarasikan ulang maupun diperbaharui
// contoh penggunaan const
const firstName = "Budi";

function fullName() {
  // local scope
  const firstName = "Andre";
  console.log(firstName); // Error, karena tidak bisa dideklarasikan ulang
  firstName = "Andre";
  console.log(firstName); // Error, karena tidak bisa diperbaharui
}
