const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.get('/', studentController.getAll);

router.get('/:id', studentController.getById);

router.get('/:id/courseId/:courseId', studentController.getByCourseId);

router.post('/', studentController.save);

router.put('/:id', studentController.update);

router.delete('/:id', studentController.deleteById);

module.exports = router;