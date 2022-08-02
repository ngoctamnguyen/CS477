const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const productRouter = require('./routes/productRouter');
const categoryRouter = require('./routes/categoryRouter');


const app = express();

app.use(cors());
app.use(express.json()); //req.body = {}

app.use('/products', productRouter);
app.use('/categories', categoryRouter);

app.use((req, res, next) => {
    res.status(404).send({ error: 'API NOT SUPPORTED' });
});

app.use((err, req, res, next) => {
    res.status(500).send({error: err.message});
});

mongoose.connect('mongodb://127.0.0.1:27017/shopping')
    .then(() => {
        app.listen(3000, () => console.log("Listening on port 3000...."));
    }).catch(err => console.error(err.message));

