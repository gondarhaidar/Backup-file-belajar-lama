// const nama = 'gondar';
// const cetakNama = (nama)=> `hai nama saya ${nama}`;
// console.log(cetakNama('gondar'));
// const fs = require('fs'); // core module
// const cetakNama  = require('./coba'); // local module
// const PI = require ('./coba');
// const moment = require('moment'); //third party module / npm module /node module

// console.log('hello');
const coba = require('./coba');

console.log(coba.cetakNama('gondar') + ', ' + coba.PI);
console.log(coba.mahasiswa.cetakMhs(), new coba.Orang());
