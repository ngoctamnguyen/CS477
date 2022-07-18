let db = [
    {id:1, fname: 'John', lname: 'Smith'},
    {id:2, fname: 'Lucy', lname: 'Jark'},
    {id:3, fname: 'Edward', lname: 'Capton'}
];

class Student {
    constructor(id, firstname, lastname){
        this.id = id;
        this.fname = firstname;
        this.lname = lastname;
    }

    save(){
        db.push({id: this.id, fname: this.fname, lname: this.lname});
    }

    edit(){
        const indx = db.findIndex(item => item.id == this.id);
        db.splice(indx, 1, {id: this.id, fname: this.fname, lname: this.lname});
    }

    static getById(id){
        let std = db.find(item => item.id == id);
        console.log(std);
    }

    static getAll(){
        console.log(db);
    }

    static deleteById(id){
        const indx = db.findIndex(item => item.id == id);
        db.splice(indx, 1);
    }
}

new Student(4, 'Tina', 'Xing').save(); //save to db
Student.getAll(); //return db;

new Student(4, 'Miss', 'Xing').edit() //edit studentId with id=4

// Student.deleteById(4); //remove studentId=4 from db
Student.getAll(); //return db;
Student.getById(1); //return {id:1, fname: 'John', lname: 'Smith'}

Student.deleteById(4); //remove studentId=4 from db
Student.getAll(); //return db;