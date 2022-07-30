const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017', function(err, client) {
    if (err) throw err;
    const db = client.db('onlineshopping');
    let doc = { title: 'React', price: 29, description: 'This is a React course' };
    db.collection('products').insertOne(doc, (err, docInserted) => {
        if (err) throw err;
        console.log(docInserted);
        return client.close();
    });
});