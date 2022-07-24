//On the server side, grab user's inputs and save into a file.
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {

    res.end(fs.readFileSync('blog.html'));
    
}).listen(3000, () => console.log('Listening on port 3000....'));