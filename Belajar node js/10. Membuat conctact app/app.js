const {tulisPertanyaan, simpanContact} = require('./contacts');

const main = async () => {
    const nama = await tulisPertanyaan('Masukan nama anda : ');
    const email = await tulisPertanyaan('masukan email anda : ');
    const noHp = await tulisPertanyaan('masukan no hp anda : '); 
    simpanContact(nama, email, noHp);
}

main();
