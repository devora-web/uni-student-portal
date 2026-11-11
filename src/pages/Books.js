
import React, { useState } from "react";
import { booksData } from "../data/booksData";
import "../styles/Books.css";

function Books({ student }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedBook, setSelectedBook] = useState(null);

  const majorBooks = booksData[student.major] || [];

  const categories = [
    "All",
    ...new Set(majorBooks.map((book) => book.category))
  ];

  const filteredBooks = majorBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || book.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="books-page">

      <div className="page-intro">
        <div>
          <span className="page-label">ACADEMIC LIBRARY</span>
          <h1>My Books</h1>
          <p>Discover recommended reading materials for your major.</p>
        </div>

        <div className="major-label">
          <span>Books for</span>
          <strong>{student.major}</strong>
        </div>
      </div>

      <div className="books-intro-card">
        <div>
          <h2>Your Learning Library</h2>
          <p>
            Explore useful academic books selected for your field of study.
          </p>
        </div>

        <div className="books-total">
          <strong>{majorBooks.length}</strong>
          <span>Available Books</span>
        </div>
      </div>

      <section className="books-container">

        <div className="books-controls">

          <input
            type="text"
            placeholder="Search by book title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === "All" ? "All Categories" : item}
              </option>
            ))}
          </select>

        </div>

        <div className="books-grid">

          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div className="book-card" key={book.id}>

                <div className="book-cover">
                  <span>BOOK</span>
                  <div className="book-cover-line"></div>
                  <h3>{book.title}</h3>
                  <small>{book.author}</small>
                </div>

                <div className="book-information">

                  <span className="book-category">
                    {book.category}
                  </span>

                  <h3>{book.title}</h3>

                  <p>By {book.author}</p>

                  <button
                    onClick={() => setSelectedBook(book)}
                  >
                    View Details
                  </button>

                </div>

              </div>
            ))
          ) : (
            <p className="empty-message">
              No books found.
            </p>
          )}

        </div>

      </section>

      {selectedBook && (
        <div
          className="book-modal-overlay"
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="book-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="book-modal-close"
              onClick={() => setSelectedBook(null)}
            >
              ×
            </button>

            <span className="book-category">
              {selectedBook.category}
            </span>

            <h2>{selectedBook.title}</h2>

            <p className="book-author">
              By {selectedBook.author}
            </p>

            <p>{selectedBook.description}</p>

            <button
              className="book-modal-button"
              onClick={() => setSelectedBook(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Books;
