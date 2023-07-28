// AddBookForm.js
import React, { useState } from "react";
import "./styles.css";

const AddBookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [ISBN, setISBN] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook({ title, author, ISBN });
    setTitle("");
    setAuthor("");
    setISBN("");
  };

  return (
    <form className="add-book-form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="add-book-input"
      />
      <input
        type="text"
        placeholder="Enter book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="add-book-input"
      />
      <input
        type="text"
        placeholder="Enter book ISBN"
        value={ISBN}
        onChange={(e) => setISBN(e.target.value)}
        className="add-book-input"
      />
      <button type="submit" className="add-book-btn">
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;
