const http = require('http');
const fs = require('fs');

http
.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });
    
    const url = req.url;
    if(url === '/about'){
        res.write('<h1>ini adalah halaman about</h1>');
        res.end();
    }else if(url === '/contact'){
        res.write('ini adalah halaman contact')
        res.end();
    }else{
        fs.readFile('./index.html', (err, data) => {
            if(err){
                res.writeHead(404);
                res.write('Error : File not found');
            }else{
                res.write(data);
            }
            res.end();
        });
    }
})
.listen(3000, () => {
    console.log('server is listening on port 3000');
});