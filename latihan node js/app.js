const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/data', (req, res) => {
    res.render('data');
})

app.listen(port, ()=>{
    console.log(`Server berjalan pada port ${port}`);
});