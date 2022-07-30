window.onload = function(){
    fetchBooks();
}

function fetchBooks(){
    fetch('http://localhost:3000/books')
        .then(response => response.json())  //using promise
        .then(books => displayBooks(books))
        .catch(err => {
            console.log('inside err');
        });
}

function displayBooks(books){
    const tbody = document.getElementById('book-table');
    let html = '';
    books.forEach(book => {
        html += `
            <tr id="tr${book.id}">
                <th>${book.id}</th>
                <td>${book.title}</td>
                <td>${book.ISBN}</td>
                <td>${book.publishedDate}</td>
                <td>${book.author}</td>
                <td>
                    <button type="button" class="btn btn-primary" onClick="deleteBook(${book.id});">DELETE</button> 
                    <button type="button" class="btn btn-primary" onClick="editBook(${book.id});">EDIT</button>
                </td>
            </tr>
        `
    });

    tbody.innerHTML = html;
}

function deleteBook(id){
    console.log(id);
    fetch("http://localhost:3000/books/"+id, {  //send delete id to server
        method:'DELETE'
    }).then(response => {
        // location.reload();
        document.getElementById(`tr${id}`).remove();  //if delete success, delete that row
    }).catch(err =>  console.log(err));
}

function editBook(id){
    window.location = 'editBook.html?id='+id;
}