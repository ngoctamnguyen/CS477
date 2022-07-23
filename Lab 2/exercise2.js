const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {

    //fs.createReadStream(path.join(__dirname, 'landscape.jpg'),).pipe(res);

    fs.createReadStream(path.join(__dirname, 'landscape.jpg'), { highWaterMark: 16 * 1024 }).pipe(res);

}).listen(3000, () => console.log('Listening on port 3000'));
