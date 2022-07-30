const abc = {a:1, b:2, add: function() { console.log("1+2 = 3?",this.a + this.b); }}

//abc.add(); //works

// setTimeout(abc.add, 2000); //problem!
// setTimeout(abc.add.bind(abc), 2000); //works
// setTimeout(function() {abc.add.call(abc)}, 2000); //works
setTimeout(function() {abc.add}, 2000); //works

function zen() {
    abc.add.apply(abc);
}

zen();