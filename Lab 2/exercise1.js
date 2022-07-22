const dns = require('dns');
dns.resolve4('www.miu.edu', function(error, address) {
    if (error) throw error;
    console.log(address);
});