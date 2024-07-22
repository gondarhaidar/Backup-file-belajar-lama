const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs')

// third-party middleware
app.use(expressLayouts)
app.use(morgan('dev'))


// build in middllware
app.use(express.static('public'))

// application level middleware
app.use((req, res, next)=>{
  console.log('Time', Date.now())
  next()
})

app.get('/', (req, res) => {
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
  res.render('contact', {
    layout : 'layouts/main-layout'
  })
})

app.get('/product/:id', (req, res)=>{
  res.send(`Product ID : ${req.params.id} <br> Category : ${req.query.category}`)
})

app.use('/', (req, res)=>{
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})