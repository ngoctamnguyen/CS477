const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    // res.end(fs.readFileSync('card.jpg'));
    // fs.readFile('card.jpg', function(err, data){
    //     if(err){
    //         res.end('Whoops');
    //     } else {
    //         res.end(data);
    //     }
    // });

    fs.createReadStream('card.jpg').pipe(res);

}).listen(3000, ()=>console.log('3000....'));