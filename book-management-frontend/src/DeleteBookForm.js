import React, { useState } from "react";
import './styles.css';

const DeleteBookForm = ({ onDeleteBook }) => {
    const [ISBN, setISBN] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onDeleteBook(ISBN);
      setISBN('');
    };
  
    return (
      <form className="delete-book-form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the ISBN of the book you want to delete"
          value={ISBN}
          onChange={(e) => setISBN(e.target.value)}
          className="delete-book-input"
        />
        <button type="submit" className="delete-book-btn">Delete Book</button>
      </form>
    );
  };
  
  export default DeleteBookForm;