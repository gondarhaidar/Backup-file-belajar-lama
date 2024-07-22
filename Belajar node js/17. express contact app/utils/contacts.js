const { contacts } = require('buffer');
const fs = require('fs');
const dirPath ='./data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

const dataPath = 'data/contacts.json';
if (!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    return contacts;
}

const findContact = nama => {
    let contacts = loadContact();
    let contact = contacts.find(c => c.nama === nama)
    return contact
}

const saveContact = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
}

const tambahContact = data => {
    const contacts = loadContact();
    contacts.push(data)
    saveContact(contacts)
}

const findNama = (nama) => {
    const contacts = loadContact();
    contacts.find(find => find.nama === nama)
    return contacts
}

const deleteContact = nama=>{
    const contacts = loadContact();
    let cntc = contacts.filter(find => find.nama !== nama)
    saveContact(cntc)
}

module.exports = {loadContact, findContact, tambahContact, findNama, deleteContact};