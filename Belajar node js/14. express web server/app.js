// const http = require('http');
// const fs = require('fs');

// http
// .createServer((req, res)=>{
//     res.writeHead(200, {
//         'Content-Type' : 'text/html'
//     });
    
//     const url = req.url;
//     if(url === '/about'){
//         res.write('<h1>ini adalah halaman about</h1>');
//         res.end();
//     }else if(url === '/contact'){
//         res.write('ini adalah halaman contact')
//         res.end();
//     }else{
//         fs.readFile('./index.html', (err, data) => {
//             if(err){
//                 res.writeHead(404);
//                 res.write('Error : File not found');
//             }else{
//                 res.write(data);
//             }
//             res.end();
//         });
//     }
// })
// .listen(3000, () => {
//     console.log('server is listening on port 3000');
// });

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})
app.get('/about', (req, res) => {
  res.send('ini adalah halaman about')
})

app.get('/contact', (req, res) => {
  res.send('ini adalah halaman contact')
})

app.use('/', (req, res)=>{
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})