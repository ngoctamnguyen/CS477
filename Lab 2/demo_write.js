const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.join(__dirname, 'testWrite.txt'), "This is test write file", 'utf-8');

fs.writeFile(path.join(__dirname, 'testWriteAsync.txt'), 'This is test write file asynchronous', 'utf-8', function(err, data) {
    if (err) console.log(err);
});

