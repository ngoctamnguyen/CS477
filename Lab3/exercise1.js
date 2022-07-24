//Create a http server which listens to 3000 port.
const http = require('http');

// const server = http.createServer((req,res) => {
//     res.end("Hi");
// }).listen(3000, () => console.log('Listening on port 3000....'));

http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello From Node.js</h1></body>');
    res.write('</html>');
    res.end();
}).listen(3000);
