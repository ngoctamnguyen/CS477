const http = require('http');

const myURL =
    new URL('https://user:pass@sub.host.com:8080/p/a/t/h?course1=nodejs&course2=angular#hash');
console.log(myURL);

let params = myURL.searchParams;
console.log(params);
console.log(params.get('course1'), params.get('course2'));

const querystring = require('querystring');
const result1 = querystring.stringify({
    firstname: 'Josh',
    lastname: 'Edward'
    });
console.log(result1); //firstname=Josh&lastname=Edward
const result2 = querystring.parse('firstname=Josh&lastname=Edward');
console.log(result2);