const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.createReadStream('signup.html').pipe(res);
}).listen(3000, () => console.log('3000....'));
