// core module
// file system
const { rejects } = require('node:assert');
const { constants } = require('node:buffer');
const fs = require('node:fs');
const { resolve } = require('node:path');

// // menuliskan string ke file (synchronous)
// try{
//     fs.writeFileSync('data/test.txt', 'helloworld secara synchronous!');
// }catch(e){
//     console.log(e);
// }

// menuliskan string ke file (asynchronous)
// fs.writeFile('data/test.txt', 'Helloworld secara asynchronous', (e)=>{
//     console.log(e);
// });

// membaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data.toString());

// membaca isi file (asynchronous)
// fs.readFile('data/test.txt', 'utf-8', (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout, 
});

// membuat folder data jika belum data
const dirPath = './data';
if (!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// membuat file constants.json jika belum ada 
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const pertanyaan1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('masukan nama anda :', (nama) => {
            resolve(nama);
        });
    });
}

const pertanyaan2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('masukan email anda :', (email) => {
            resolve(email);
        });
    });
}

const main = async () => {
    const nama = await pertanyaan1();
    const email = await pertanyaan2();
    const contact = {nama, email};
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('terimakasih sudah mengisi data');
    rl.close();
}
main();

//     rl.question('masukan no. hp anda :', (noHP)=>{
//         3
//         const contact = {nama, noHP};
//         const file = fs.readFileSync('data/contacts.json', 'utf-8');
//         const contacts = JSON.parse(file);
//         contacts.push(contact);
//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
//         console.log('terimakasih sudah mengisi data');
//         rl.close();
//     });
// });
