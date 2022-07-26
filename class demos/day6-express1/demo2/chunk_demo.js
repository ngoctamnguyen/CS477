const http = require('http');
http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/messsages" method="POST">Enter Message: <input name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.end();
    } else if (url === '/messsages' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            console.log(parsedBody.split('=')[1].split('+').join(' '));
        });
        res.end('Done');
    }
    }).listen(3000, () => console.log('Listening on port 3000'));