// BookList.js
import React from 'react';
import './styles.css';

const BookList = ({ books }) => {
  return (
    <div className="book-list-container">
      {books.length === 0 ? (
        <p className="book-list-message">No books in the library.</p>
      ) : (
        <ul className="book-list">
          {books.map((book) => (
            <li key={book.ISBN} className="book-item">
              Title: {book.title}, Author: {book.author}, ISBN: {book.ISBN}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
