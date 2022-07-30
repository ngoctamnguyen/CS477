const Book = require('../models/book');

exports.getAll = (req, res, next) => {
    res.json(Book.getAll());
};


exports.getById = (req, res, next) => {
    res.json(Book.getById(req.params.id));
};

exports.save = (req,res, next) => {
    let addBook = new Book(null, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).save();
    console.log(addBook);
    res.send(addBook);
};

exports.update = (req,res) => {
    let updatebook = Book.update(req.params.id, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author);
    res.send(updatebook);
}

exports.update2 = (req,res) => {
    let updatebook = new Book(req.params.id, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).update2();//this is object instance so we call INSTANCE.update2()
    res.send(updatebook);
}

exports.deleteById = (req, res) => {
    res.send(Book.deleteById(req.params.id)); //call a function of class: Book.deleteById(req.params.id)
}

