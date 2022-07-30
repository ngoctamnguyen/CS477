// const getName = require('./mymodule/pattern1');
// console.log(getName);
// getName.getName();

//OR

const getName = require('./mymodule/pattern1').getName;
console.log(getName);
getName();

//OR
// const {getName} = require('./mymodule/pattern1');
// getName();