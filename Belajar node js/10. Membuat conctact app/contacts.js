const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const dirPath = './data';
const dataPath = './data/contacts.json';

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        });
    });
}

const simpanContact = (nama, email, noHp) => {
    const contact = { nama, email, noHp };
    const file = fs.readFileSync(dataPath, 'utf-8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync(dataPath, JSON.stringify(contacts));
    console.log('terimakasih sudah mengisi data');
    rl.close();    
}

module.exports = {tulisPertanyaan, simpanContact};