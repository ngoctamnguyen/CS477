"use strict";

let group = {
    title: "Our group",
    students: ["John", "Peter", "Alice"],
    showList: function() {
        this.students.forEach(student => console.log(this.title + ": " + student));
    }
};
group.showList();