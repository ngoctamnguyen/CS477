let books = [
    {id: 1, title: 'Dashboard', ISBN: '987', publishedDate: 01-01-2022, author: 'Steve Wexler'},
    {id: 2, title: 'Ten Pivotal Moments in the Making ', ISBN : '9780393609318', publishedDate: 02-01-2022, author: 'Martha Ackmann'},
    {id: 3, title: 'The True Story of Thirteen Women', ISBN: '9780375758935', publishedDate: 03-01-2022, author: 'Lynn Sherr'},
    {id: 4, title: 'Birds of California', ISBN: '9780063159150', publishedDate: 04-01-2022, author: 'Katie Cotugno'},
] 

class Book {
    constructor(id, title, ISBN, publishedDate, author) {
        this.id = id,
        this.title = title,
        this.ISBN = ISBN,
        this.publishedDate = publishedDate,
        this.author = author
    }

    static getAll() {
        return books;
    }

    static getById(id) {
        const index = books.findIndex(book => book.id == id);
        if (index < 0) {
            throw new Error('Can not find the book id ' + id);
        } else {
            return books[index];
        }
    }

    save() {
        let maxId = Math.max(...books.map(obj => {return obj.id}));
        this.id = maxId + 1;
        books.push(this);
        return this;
    }

    static update(id, title, ISBN, publishedDate, author) {
        let chBook = books.find(book => book.id == id);
        if (chBook) {
            chBook.title = title;
            chBook.ISBN = ISBN;
            chBook.publishedDate = publishedDate;
            chBook.author = author;
            return chBook;
        } else {
            throw new Error('No Book found');
        }
    }

    update2 () {   //this is non static function. it is more flexible because it is no need chagne here when we add more properties
        const index = books.findIndex(book => book.id == this.id);
        if (index < 0) {
            throw new Error('Can not find the book id ' + this.id);
        } else {
            books[index] = this;
            return this;
        }
    }

    static deleteById(id) {
        const index = books.findIndex(book => book.id == id);
        if (index < 0) {
            throw new Error('Can not find the book id ' + id);
        } else {
            let temp = books[index];
            books.splice(index, 1);
            return temp;
        }
    }
}

module.exports = Book;