const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017', function(err, client) {
    if (err) throw err;
    const db = client.db('onlineshopping');

    db.collection('products').updateOne({ title: 'Angular' }, { $set: { updateTime: new Date() } }, function(err, data) {
        console.log(data);
        client.close();
    })
});