import React, { useState } from "react";

function Library() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "مقدمة ابن خلدون",
      author: "ابن خلدون",
      isbn: "1289499030",
    },
    {
      id: 2,
      title: "الحاوي في الطب",
      author: "ابو بكر الرازي",
      isbn: "893847239479",
    },
    {
      id: 3,
      title: "الحاوي في الطب",
      author: "ابو بكر الرازي",
      isbn: "893847239479",
    },
    {
      id: 4,
      title: "الحاوي في الطب",
      author: "ابو بكر الرازي",
      isbn: "893847239479",
    },
    {
      id: 5,
      title: "الحاوي في الطب",
      author: "ابو بكر الرازي",
      isbn: "893847239479",
    },
  ]);

  const cardContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    padding: "20px",
  };

  const innerCardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    minWidth: "250px",
    maxWidth: "300px",
    textAlign: "center",
  };

  return (
    <div>
      <header
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <h1>Book Catalog</h1>
      </header>

      <div style={cardContainerStyle}>
        {books.map((book) => (
          <div key={book.id} style={innerCardStyle}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>
          </div>
        ))}
      </div>

      <footer
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <p>&copy; 2024 Book Catalog App</p>
      </footer>
    </div>
  );
}

export default Library;
