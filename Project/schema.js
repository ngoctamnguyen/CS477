const userSchema = new Schema({
    userId: { type: String, required: true },
    username: string,
    password: String,
    email: String,
    photo: String,
    following: [
        {
            userId: {type: Schema.Types.ObjectId, ref: 'users'},
            date: Date
        }
    ]
}, {
    versionKey: false
});


const tweetedSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'users', require: true},
    date: Date,
    tweeted: String,
}, {
    versionKey: false
});