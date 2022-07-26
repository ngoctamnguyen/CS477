const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    console.log('1....');
    next();
}, (req, res, next) => {
    console.log('2....');
    next();
},
(req, res, next) => {
    console.log('3....');
    next();
});

app.get('/', (req, res) => {
    console.log('4....');
    res.send('Hi');
});


app.get('/search', (req, res, next) => {
    console.log(req.query);
    res.send(JSON.stringify(req.query));
});

app.get('/users/:userid/posts/:postid', (req, res, next) => {
    console.log(req.params);
    res.send(`UserId: ${req.params.userid}, postId:: ${req.params.postid}`);
});
//http://localhost:3000/users/Tam/posts/abc
//display: UserId: Tam, postId:: abc

app.post('/signup', (req, res, next) => {
    console.log('11....');
    next();
}, (req, res, next) => {
    console.log('22....');
    next();
},
(req, res, next) => {
    console.log('33....');
    next();
});

app.post('/', (req, res) => {
    console.log('44....');
    res.send('Hi 44');
});

app.use((req,res,next) => {
    res.status(404).send('Error 404: URL not exist');
});

app.use((err, req, res, next) => {
    res.status(500).send('Whooops!!!!');
    // res.send( 'Whoops');
});


app.listen(3000);