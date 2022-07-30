const express = require('express');
const app = express();
const cors = require('cors');


const bookRouter = require('./routes/bookRouter');
const {mongoConnect} = require('./utils/databaseAsync');

app.use(cors());
app.use(express.json());

app.use('/books', bookRouter);

app.use((req,res,next) => {
    res.status(404).send('API NOT SUPPORTED');
});

mongoConnect(() => {
    app.listen(3000, () => console.log('Connected to database...'));
});