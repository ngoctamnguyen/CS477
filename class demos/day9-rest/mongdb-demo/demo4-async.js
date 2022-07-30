const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'onlineshopping';

(async function() {
    let client;

    try {
        client = await MongoClient.connect(url);
        console.log("Connected correctly to server");

        const db = client.db(dbName);
        const docs = [
            { title: 'SSP 2', price: 3000, description: 'Server Side Programming 2' },
            { title: 'AP 2', price: 2000, description: 'Asynchronous Programming 2' }
        ];
        const cursor = await db.collection('products').insertMany(docs);
        console.log(cursor);

    } catch (err) {
        console.log(err.stack);
    }

    // Close connection
    client.close();
})();