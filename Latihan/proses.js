const fs = require('fs')
const pushNama = nama => {
    const dataNama = {nama}
    const json = fs.readFileSync('data/data.json', 'utf-8')
    const data = JSON.parse(json)
    data.push(dataNama)
    fs.writeFileSync('data/data.json', JSON.stringify(data))
}
module.exports = {pushNama}