const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
MongoClient.connect('mongodb://localhost:27017')
    .then(client => {
        console.log('Connected......');
        const db = client.db('onlineshopping');
        db.collection('products').findOne({ 'title': 'Angular' }, function(err, doc) {
            if (err) throw err;
            // Print the result. 
            // Will print a null if there are no documents in the db.
            console.log(doc);
            // Close the DB 
            client.close();
        });
    })
    .catch(err => console.log(err));