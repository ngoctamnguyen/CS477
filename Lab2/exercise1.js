const dns = require('dns');
dns.resolve4('www.miu.edu', function(error, address) {
    if (error) {
        throw new Error('Cannot resovle this domain')
    } else {
        console.log(address);
    }
   
});

dns.lookup('www.miu.edu', function(error, address) {
    if (error) {
        throw new Error('Cannot resovle this domain')
    } else {
        console.log(address);
    }
   
});