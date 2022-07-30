const Book = require('../models/books');

exports.getAll = async (req, res, next) => {
    res.json(await Book.getAll());
};

exports.getById = async (req, res, next) => { 
    res.json(await Book.getById(req.params.id));
}

exports.save = async (req, res, next) => {
    let book = new Book(null, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author);
    const result = await book.save()
    book._id = result.insertedId;
    res.json(book);
}

exports.update = async (req, res) => {
    let updateBook = new Book(req.params.id, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author);
    await updateBook.update();
    res.json(updateBook);
}


exports.deleteById = async (req, res) => {
    await Book.deleteById(req.params.id)
    res.json({_id: req.params.id});
}