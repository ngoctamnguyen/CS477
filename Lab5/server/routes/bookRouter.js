const express = require('express');
const router = express.Router();

//const Book = require('../models/book');
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAll);

router.get('/:id', bookController.getById);

router.post('/', bookController.save);

router.put('/:id', bookController.update2); //update2 is non static funtion

router.delete('/:id', bookController.deleteById);

module.exports = router;