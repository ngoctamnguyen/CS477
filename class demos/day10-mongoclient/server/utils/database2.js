const { MongoClient } = require('mongodb');
let _db;
//This way when run app, it will connect to databae. if success -> start app.listen().
//the connecttion to database be kept all time the app running
function mongoConnect(callback) {
    MongoClient.connect('mongodb://127.0.0.1:27017')
        .then(client => {
            console.log('connected..');
            _db = client.db('shopping');
            callback();
        })
        .catch(error => console.log(error));
}

function getDB(){
    if(_db){
        return _db;
    } else {
        throw new Error('Database connection failed');
    }
}

exports.mongoConnect = mongoConnect; //this function use in app.js to connect to database
                        //this will exported object, so in app.js use curly bracket 
                        //{mongoConnect} = require('./utils/database3'), so mongoConnect is function
exports.getDB = getDB; //this function use in book.js to manipulate database