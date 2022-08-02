const express = require('express');
const app = express();
const cors = require('cors');


const studentRouter = require('./routes/studentRouter');
const { default: mongoose } = require('mongoose');


app.use(cors());
app.use(express.json());

app.use('/students', studentRouter);

app.use((req,res,next) => {
    res.status(404).send('API NOT SUPPORTED');
});

app.use((err, req, res, nect) => {
    res.status(500).send({error: err.message});
});

mongoose.connect('mongodb://127.0.0.1:27017/students')
    .then(() => {
    app.listen(3000, () => console.log('Connected to database...'));
}).catch(err => console.error(err.message));
