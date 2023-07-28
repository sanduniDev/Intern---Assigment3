import React, { useState } from 'react';
import AddBookForm from './AddBookForm';
import BookList from './BookList';
import DeleteBookForm from './DeleteBookForm';

const App = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
    console.log(`Book ${newBook.title} added successfully.`);
  };

  const handleDeleteBook = (ISBN) => {
    const updatedBooks = books.filter((book) => book.ISBN !== ISBN);
    setBooks(updatedBooks);
    console.log('Book deleted successfully.');
  };

  return (
    <div>
      <h1>Book Management Application</h1>
      <AddBookForm onAddBook={handleAddBook} />
      <BookList books={books} />
      <DeleteBookForm onDeleteBook={handleDeleteBook} />
    </div>
  );
};

export default App;
