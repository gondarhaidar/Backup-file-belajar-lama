function cetakNama(nama){
    return `halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    'nama' : 'gondar',
    'umur' : 20,
    cetakMhs() {
        return `halo, nama saya ${this.nama} dan umur saya ${this.umur} tahun`;
    }
}

class Orang {
    constructor(){
        return 'objek orang telah dibuat';
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;
module.exports = {cetakNama, PI, mahasiswa, Orang}