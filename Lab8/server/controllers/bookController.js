const Book = require('../models/books');
const {ObjectId} = require('mongodb');

exports.getAll = async (req, res, next) => {
    res.json(await Book.find());
};

exports.getById = async (req, res, next) => { 
    res.json(await Book.findById(req.params.id));
}

exports.save = async (req, res, next) => {
    try{
        const result = await new Book(req.body).save(); //instance methods
        res.json(result);
    } catch(error) {
       next(error);
    } 
}

exports.update = async (req, res) => {
    const result = await Book.updateOne({_id: new ObjectId(req.params.id)} , req.body);
    res.json(result);
}


exports.deleteById = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({_id: req.params.id});
}