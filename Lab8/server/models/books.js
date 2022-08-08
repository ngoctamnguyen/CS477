const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookSchema = new Schema ({
        title: {type: String, require: true},
        isbn: String,
        publishedDate: Date,
        author:String
    }, {
        versionKey: false,
    })

bookSchema.methods.saveWithTitleChecking = function() {
    if (this.title.length <4 ) {
        throw new Error("Book title must be greater than 4");
    } else {
        return this.save();
    }
}

const Model = mongoose.model('book', bookSchema);

module.exports = Model;
