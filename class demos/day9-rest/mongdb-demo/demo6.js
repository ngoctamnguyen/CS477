const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017', function(err, client) {
    if (err) throw err;
    const db = client.db('onlineshopping');
    var query = { title: 'Angular' };
    // remove all documents that have 'student' value is 'Susie'
    db.collection('products').deleteOne(query, function(err, result) {
        console.log("Result:" + JSON.stringify(result));
        return client.close();
    });
});