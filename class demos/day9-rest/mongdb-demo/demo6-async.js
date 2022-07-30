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

        const cursor = await db.collection('products').deleteOne({ title: 'Angular 11' });
        console.log(cursor);

    } catch (err) {
        console.log(err.stack);
    }

    // Close connection
    client.close();
})();