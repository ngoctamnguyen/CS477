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
        const col = db.collection('products');

        const cursor = await col.findOne({ title: 'Angular' });
        console.log(cursor);



    } catch (err) {
        console.log(err.stack);
    }

    // Close connection
    client.close();
})();