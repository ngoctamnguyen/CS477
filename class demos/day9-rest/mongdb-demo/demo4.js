const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017', function(err, client) {
    if (err) throw err;
    const db = client.db('onlineshopping');
    const docs = [
        { title: 'SSP', price: 2000, description: 'Server Side Programming' },
        { title: 'AP', price: 1000, description: 'Asynchronous Programming' }
    ];
    db.collection('products').insertMany(docs, (err, docInserted) => {
        if (err) throw err;
        console.log(`Success: ${JSON.stringify(docInserted)}!`);
        return client.close();
    });
});