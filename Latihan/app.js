const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const proses = require('./proses')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/send', (req, res)=>{
    proses.pushNama(req.query.nama)
    res.end()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})