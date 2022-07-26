const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded());

app.use('/signup', (req, res, next) => {
        if ((req.body.fname === '') || (req.body.lname === '')) {
                res.write('<html>');
                res.write('<head><title>Saved</title></head>');
                res.write('<body><h2>Firstname and lastname are required<h2><br> <a href="http://localhost:8080">Back to input page</a></body>');
                res.write('</html>');
                return res.end();
        }
        fs.readFile(path.join(__dirname, 'database.txt'),'utf8', function (err, data) {
                if (err) {
                        console.log(err);
                } else {
                        fs.writeFile(path.join(__dirname, 'database.txt'),
                                data + req.body.fname + '=' + req.body.lname + ',', function (err) {
                                if (err) {
                                        res.write('<html>');
                                        res.write('<head><title>Saved</title></head>');
                                        res.write('<body><h2>save failure<h2><br> <a href="http://localhost:8080">Input again</a></body>');
                                        res.write('</html>');
                                        return res.end();
                                } else {
                                        res.write('<html>');
                                        res.write('<head><title>Saved</title></head>');
                                        res.write('<body><h2>saved successfully<h2><br> <a href="http://localhost:8080">Back to input page</a></body>');
                                        res.write('</html>');
                                        return res.end();
                                }
                        });
                }
        });
});

app.use('/', (req, res, next) => {
        res.write('<html>');
        res.write('<head><title>Signup</title></head>');
        res.write('<body><form action="/signup" method="POST">Firstname: <input name="fname"><br>Lastname: <input name="lname"><br><button type="submit">submit</button></form></body>');
        res.write('</html>');
        return res.end(); 
});


app.listen(8080, () => console.log('Listening port 8080'));




