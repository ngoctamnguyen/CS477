const express = require('express');
//1. instatiation
const app = express();

//2. Configuration - configure how express behave in different
app.set('port', process.env.PORT || 3000);
const port = app.get('port');

//go to path user, all the sub directory of user, /user/*
app.use('/user', (req, res, next) => {
    console.log('2.....');
    res.send('insaide user');
});

app.use((req, res, next) => {
    console.log('1......');
    res.send('Hi');
});



//7. 
//app.listen(3000, () => console.log('Server listen on pirt 3000...'));
app.listen(app.get('port'), () => console.log(`${app.get('port')}.....`));
