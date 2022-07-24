const dns = require('dns');
dns.lookup('www.miu.edu', (err, address) => {
    if(err){
        throw new Error('Whoops');
    } else {
        console.log(address);
    }
});