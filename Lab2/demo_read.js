const fs = require('fs');
const path = require('path');
console.log(__dirname); // returns absolute path of current file
const greet = fs.readFileSync(path.join(__dirname, 'greet.txt'), 'utf8');
console.log(greet);
const greet2 = fs.readFile(path.join(__dirname, 'greet.txt'), 'utf8', function(err, data) { 
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
