//The home page “/” which displays an html page with a blog post form: there's a title input, a blog body textarea and a submit button in the form
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {

    res.end(fs.readFileSync('blog.html'));
    
}).listen(3000, () => console.log('Listening on port 3000....'));