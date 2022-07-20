// let timerId = setInterval(() => console.log("Tam"), 1000);
// setTimeout(() => {clearInterval(timerId); console.log("Stop");}, 10000 );


let user = {
    fname: "John",
    sayHi: function() {
        console.log(`Hello, ${this.fname} !`);
    }
};
//wrapper arrow
//setTimeout(() => {user.sayHi()}, 500);
//Wrapper function
setTimeout(function() {user.sayHi();}, 500);

//bind
//setTimeout(user.sayHi.bind(user), 1000);


