const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const method = require('./utils/contacts');
const {body, validationResult, check} = require('express-validator')

const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs')

// third-party middleware
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded())


app.get('/home', (req, res) => {
  // res.sendFile('./index.html', {root: __dirname})
  const mahasiswa = [
    {
      nama : 'Gondar Ahmad Haidar',
      Email : 'gondarhadiar@gmail.com'
    },
    {
      nama : 'Gani',
      Email : 'gani@gmail.com'
    },
    {
      nama : 'Abdul',
      Email : 'abdul@gmail.com'
    }
  ]
  res.render('index', {
    layout : 'layouts/main-layout',
    nama : 'Gondar Ahmad Haidar', 
    title : "Belajar nodeJs",
    mahasiswa : mahasiswa
  })
})
app.get('/about', (req, res, next) => {
  res.render('about', {
    layout : 'layouts/main-layout'
  })
})

app.get('/contact', (req, res) => {
  const contacts = method.loadContact();
  res.render('contact', {
    layout : 'layouts/main-layout',
    contacts
  })
})

app.get('/contact/add', (req, res)=>{
  res.render('add', {
    layout : 'layouts/main-layout'
  })
})

app.post('/contact', [
  body('nama').custom(cariNama => {
    const nama = method.findNama(cariNama)
    if(nama){
      throw new Error('Nama sudah ada')
    }
  }),
  check('email', 'email tidak valid').isEmail(),
  check('noHp', 'nomor tidak valid').isMobilePhone('id-ID')
], (req, res)=>{

const errors = validationResult(req);
  // if(!errors.isEmpty()){
  //   const errors = validationResult(req)
  //   res.render('add', {
  //     layout : 'layouts/main-layout',
  //     errors : errors.array()
  //   })
  // }else{
  //   method.tambahContact(req.body)
  //   res.redirect('/contact')
  // }
  method.tambahContact(req.body)
  res.redirect('/contact')
})



app.get('/contact/:nama', (req, res) => {
  const detail = method.findContact(req.params.nama);
  // console.log(detail)
  res.render('detail', {
    layout : 'layouts/main-layout',
    detail
  })
})

app.get('/contact/delete/:nama', (req, res)=>{
  method.deleteContact(req.params.nama);
  res.redirect('/contact')
})


app.use('/', (req, res)=>{
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})