const { MongoClient } = require('mongodb'); //destructure assignment

(async function(){
   const client = await MongoClient.connect('mongodb://127.0.0.1:27017'); //Async - await
   console.log('connected...');

   const books = await client.db('store')
                            .collection('books').find().toArray();
    console.log(books);
    client.close();
})(); 
