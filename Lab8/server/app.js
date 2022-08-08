const express = require('express');
const app = express();
const cors = require('cors');


const bookRouter = require('./routes/bookRouter');
const authRouter = require('./routes/authRouter');
const { default: mongoose } = require('mongoose');


app.use(cors());
app.use(express.json());

app.use(authRouter);

app.use('/books', bookRouter);

app.use((req,res,next) => {
    res.status(404).send('API NOT SUPPORTED');
});

app.use((err, req, res, nect) => {
    res.status(500).send({error: err.message});
});

mongoose.connect('mongodb://127.0.0.1:27017/store')
    .then(() => {
    app.listen(3000, () => console.log('Connected to database...'));
}).catch(err => console.error(err.message));
