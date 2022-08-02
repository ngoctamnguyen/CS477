// let promise = new Promise(function(resolve, reject) {
//     const random = Math.random();
//     console.log('random: ', random);
//     if (random > 0.5) {
//         setTimeout(() => resolve("done!"), 1000);
//     } else {
//         setTimeout(() => reject(new Error("Whoops!")), 1000);
//     }
// });

// promise.then(result => console.log(result))
//     .catch(error => console.log(error))
//     .finally(() => console.log("Promise ready!"));

function foo() {
    return new Promise(function(resolve, reject) {
        const random = Math.random();
        console.log('random: ', random);
        if (random > 0.5) {
            setTimeout(() => resolve("done!"), 1000);
        } else {
            setTimeout(() => reject(new Error("Whoops!")), 1000);
        }
    });
}

foo()
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Promise ready!"));

    
//example 2
// function foo() {
//     return new Promise((resolve, reject) => {
//         resolve('Hi');
//     }).then(result => {
//         return '123'; //return new Promise(resolve){resolve(123)}
//     });
// }
// foo()
//     .then(data=> console.log(data));

