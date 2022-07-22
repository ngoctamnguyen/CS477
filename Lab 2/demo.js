const path = require('path');
const fs = require('fs');

const readBySync = fs.readFileSync(path.join(__dirname, 'greet.txt'), 'utf-8');
console.log(readBySync);
const readByAsync = fs.readFile(path.join(__dirname, 'greet.txt'), 'utf-8', function(err, data) {
    if (err) {
        throw err;
        console.log(data);
    }
})
console.log("Done!");

