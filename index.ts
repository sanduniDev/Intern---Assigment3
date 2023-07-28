import * as readlineSync from 'readline-sync';

// We will define a book type and create an array of books. Each book will have title ,
// author , and ISBN .

type Book = {
    title: string,
    author:string,
    ISBN:string
};

let books: Book[] = [];

// Let's implement the functions that allow users to add, view, and delete books.
// 1. Adding a book:

function addBook() {
    const title = readlineSync.question('Enter book title: ');
    const author = readlineSync.question('Enter book author: ');
    const ISBN = readlineSync.question('Enter book ISBN: ');

    const newBook: Book = { title, author, ISBN };
    books.push(newBook);

    console.log(`Book ${title} added successfully.`);
}

// 1. Viewing all books:
function viewBooks() {
    if (books.length === 0) {
    console.log('No books in the library.');
    } else {
    for (let book of books) {
    console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`);
            }
        }
    }

    // 1. Deleting a book:
    function deleteBook() {
        const ISBN = readlineSync.question('Enter the ISBN of the book you want to delete:');
        const index = books.findIndex(book => book.ISBN === ISBN);
        if (index !== -1) {
        books.splice(index, 1);
        console.log('Book deleted successfully.');
        } else {
        console.log('Book not found.');
        }
    }

    // The main menu will allow users to choose an action. We will implement this using a
// while loop, which will continue running until the user chooses to exit.
function mainMenu() {
    let shouldExit = false;
        while (!shouldExit) {
            console.log('\\n1. Add book\\n2. View books\\n3. Delete book\\n4. Exit');
            const option = readlineSync.question('Choose an option: ');
                switch (option) {
                    case '1':
                        addBook();
                            break;
                    case '2':
                        viewBooks();
                            break;
                    case '3':
                        deleteBook();
                            break;
                    case '4':
                    shouldExit = true;
                            break;
                     default:
                        console.log('Invalid option. Please try again.');
    }
    }
    }

        
// Finally, you can run your application by calling mainMenu() at the end of your index.ts
// file:

mainMenu();
