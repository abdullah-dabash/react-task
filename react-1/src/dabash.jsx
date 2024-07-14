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
    {
      id: 5,
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
    {
      id: 5,
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
    {
      id: 5,
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
    {
      id: 5,
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
    {
      id: 5,
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
    {
      id: 5,
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
    {
      id: 5,
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
    {
      id: 5,
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
    {
      id: 5,
      title: "الحاوي في الطب",
      author: "ابو بكر الرازي",
      isbn: "893847239479",
    },
  ]);

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Library</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <h2 className="text-xl font-bold mb-2">{book.title}</h2>
            <p className="text-gray-700">Author: {book.author}</p>
            <p className="text-gray-700">ISBN: {book.isbn}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
