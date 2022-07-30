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
        const cursor = col.find();

        // Iterate over the cursor
        while (await cursor.hasNext()) {
            const doc = await cursor.next();
            console.log(doc);
        }

    } catch (err) {
        console.log(err.stack);
    }

    // Close connection
    client.close();
})();