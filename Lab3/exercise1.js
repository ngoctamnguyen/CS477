//Create a http server which listens to 3000 port.
const http = require('http');

const server = http.createServer((req,res) => {
    res.end("Hi");
}).listen(3000, () => console.log('Listening on port 3000....'));
