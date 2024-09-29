const isbn = document.querySelector('#isbn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const publishedDate = document.querySelector('#publishedDate');
const image = document.querySelector('#image');
const btn = document.querySelector('.btn');
const tbody = document.querySelector('.books');

let books = [];

function loadBooks() {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }
}

function saveBooks() {
    localStorage.setItem('books', JSON.stringify(books));
}

class Book {
    addBook(book) {
        books.push(book);
        saveBooks(); 
        this.display(books);
    }

    removeBook(index) {
        if(confirm('aree you sure to delete')){
        books.splice(index, 1);
        saveBooks(); 
        this.display(books);
        }
    }

    display(data) {
        let output = '';
        if (data.length) {
            data.forEach((book, index) => {
                output += `<tr> 
                            <td> ${book.isbn} </td>
                            <td> ${book.title} </td>
                            <td> ${book.author} </td>
                            <td> ${book.publishedDate} </td>
                            <td> <img src="${book.image}" width='60px' height='60px'>  </td>
                            <td>
                                <button onclick="bookObj.removeBook(${index})" class="remove">Remove</button>
                            </td>
                        </tr>`;
            });
        } else {
            output = `<tr><td colspan='6'> No Data found </td> </tr>`;
        }
        tbody.innerHTML = output;
    }
}

let bookObj = new Book();


window.addEventListener('load', () => {
    loadBooks();
    bookObj.display(books);
});

btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (isbn.value && title.value && author.value && publishedDate.value && image.files[0]) {
        const reader = new FileReader();
        reader.onload = function () {
            const bookData = {
                isbn: isbn.value,
                title: title.value,
                author: author.value,
                publishedDate: publishedDate.value,
                image: reader.result
            };
            bookObj.addBook(bookData);
            isbn.value = '';
            title.value = '';
            author.value = '';
            publishedDate.value = '';
            image.value = '';
            alert('successfully Added')
        };
        reader.readAsDataURL(image.files[0]);
    } else {
        alert('Please fill in all the fields');
    }
});