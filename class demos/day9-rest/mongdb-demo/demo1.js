const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017')
    .then(client => {
        console.log('Connected......');
        const db = client.db('onlineshopping');
        db.collection('products').find().forEach(function(doc) {

            console.log(doc);
            // Close the DB 
            client.close();
        })
    })
    .catch(err => console.log('Error: ', err));