const fs = require('node:fs');

const rl = require('readline');
// fs.writeFileSync('data/data.txt', 'helloworld');

console.log('mulai');
// fs.readFile('data/data.txt', 'utf-8', (err, data)=> {
//     if(err) throw err;
//     console.log(data);
// });
let data = fs.readFileSync('data/data.txt', 'utf-8');
console.log(data);
console.log('selesai');