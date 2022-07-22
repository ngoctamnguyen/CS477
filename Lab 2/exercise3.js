const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
// this is a readable & writable stream and it returns a zipped stream

const guzip = zlib.createGunzip();
const readable = fs.createReadStream(path.join(__dirname, 'greet.txt.gz'));
const decompressed = fs.createWriteStream(path.join(__dirname, 'greet1.txt'));
readable.pipe(guzip).pipe(decompressed);