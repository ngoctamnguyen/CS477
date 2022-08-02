const mongoose = require('mongoose');

const {Schema} = mongoose;

const studentSchema = new Schema ({
        studentId: {type: String, require: true},
        firstname: String,
        lastname: String,
        courses: [{
            courseId: String,
            coursename: String,
            semeter: String,
            grade: Number
        }]
    }, {
        versionKey: false,
    })

studentSchema.methods.saveWithTitleChecking = function() {
    if (this.studentId.length == '' ) {
        throw new Error("studentId Not be empty");
    } else {
        return this.save();
    }
}

const Model = mongoose.model('student', studentSchema);

module.exports = Model;
