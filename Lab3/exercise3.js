//On the server side, grab user's inputs and save into a file.
const http = require('http');
const fs = require('fs');

let options = {
    key: fs.readFileSync('./privateKey.key'),
    cert: fs.readFileSync('./certificate.crt')
};

const server = http.createServer(options);

server.on('request', (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.end(fs.readFileSync('blog.html'));
    };


    if (url === '/blogPost' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            //console.log(parsedBody.split('=')[2].split('+').join(' '));
            fs.writeFile('message.txt', parsedBody.split('=')[2].split('+').join(' '), (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.write('<html>');
                    res.write('<head><title>Saved</title></head>');
                    res.write('<body>Save successful.. <br> <a href="http://localhost:3000">Back to homepage</a></body>');
                    res.write('</html>');
                    return res.end();
                }
            });
        });

        //res.statusCode = 302;
        //res.setHeader("Location", "/");
        //return res.end('Save successfully....');
    }
});

server.listen(3000, () => console.log('Listening on port 3000....'));