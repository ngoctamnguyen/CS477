class Person {

    constructor(name = 'John') {
        this.name = name;
    }

    getName() {
        console.log(this.name);
    }

}

module.exports= new Person('Bella');

//return module.exports