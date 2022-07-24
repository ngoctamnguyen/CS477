const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    //option1
    //res.end(fs.readFileSync('landscape.jpg'));

    //option2
    // fs.readFile('landscape.jpg', function(error, data) {
    //     if (error) {
    //         res.end('error');
    //     } else {
    //         res.end(data);
    //     }
    // });

    //option3 
    fs.createReadStream(path.join(__dirname, 'landscape.jpg'), { highWaterMark: 16 * 1024 }).pipe(res);

}).listen(3000, () => console.log('Listening on port 3000'));
