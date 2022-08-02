const Student = require('../models/student');
const {ObjectId} = require('mongodb');

exports.getAll = async (req, res, next) => {
    res.json(await Student.find());
};

exports.getById = async (req, res, next) => { 
    res.json(await Student.find({studentId: req.params.id}));
}

exports.getByCourseId = async (req, res, next) => { 
    const result = await Student.find({studentId: req.params.id});
    res.send(result[0].courses.filter(id => id.courseId == req.params.courseId));
}

exports.save = async (req, res, next) => {
    try{
        const result = await new Student(req.body).save(); //instance methods
        res.json(result);
    } catch(error) {
       next(error);
    } 
}

exports.update = async (req, res) => {
    const result = await Student.updateOne({_id: new ObjectId(req.params.id)} , req.body);
    res.json(result);
}


exports.deleteById = async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({_id: req.params.id});
}