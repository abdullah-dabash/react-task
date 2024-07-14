// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Footer from "./footer";
// import Header from "./header";
// import Nav from "./nav";

// function Catalog() {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editBook, setEditBook] = useState(null);
//   const [newTitle, setNewTitle] = useState('');
//   const [newAuthor, setNewAuthor] = useState('');
//   const [newISBN, setNewISBN] = useState('');
//   const [showAddForm, setShowAddForm] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://book-ecf27-default-rtdb.europe-west1.firebasedatabase.app/books.json');
//         const booksWithDeletedFlag = response.data.map(book => ({ ...book, deleted: false }));
//         setBooks(booksWithDeletedFlag);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleEdit = (book) => {
//     setEditBook(book);
//     setNewTitle(book.title);
//     setNewAuthor(book.author);
//     setNewISBN(book.isbn);
//   };

//   const handleDelete = (id) => {
//     setBooks((prevBooks) => 
//       prevBooks.map(book => 
//         book.id === id ? { ...book, deleted: true } : book
//       )
//     );
//     console.log(`Soft deleted book with ID: ${id}`);
//   };

//   const handleUpdate = async (id) => {
//     const updatedBook = { ...editBook, title: newTitle, author: newAuthor, isbn: newISBN };

//     await axios.put(`https://book-ecf27-default-rtdb.europe-west1.firebasedatabase.app/books/${id}.json`, updatedBook);

//     setBooks((prevBooks) =>
//       prevBooks.map(book => (book.id === id ? updatedBook : book))
//     );

//     setEditBook(null);
//     setNewTitle('');
//     setNewAuthor('');
//     setNewISBN('');
//   };

//   const handleAddBook = async () => {
//     const newBook = { title: newTitle, author: newAuthor, isbn: newISBN, deleted: false };

//     const response = await axios.post('https://book-ecf27-default-rtdb.europe-west1.firebasedatabase.app/books.json', newBook);

//     newBook.id = response.data.name;

//     setBooks((prevBooks) => [...prevBooks, newBook]);
//     setShowAddForm(false);
//     setNewTitle('');
//     setNewAuthor('');
//     setNewISBN('');
//   };

//   return (
//     <>
//       <Nav />
//       <Header />
//       <div className="bg-gray-100 p-6">
//         <h2 className="text-center text-3xl font-bold mb-6">Book Catalog</h2>
//         <button
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
//           onClick={() => setShowAddForm(!showAddForm)}
//         >
//           {showAddForm ? 'Cancel' : 'Add New Book'}
//         </button>

//         {showAddForm && (
//           <div className="mt-4">
//             <input
//               type="text"
//               value={newTitle}
//               onChange={(e) => setNewTitle(e.target.value)}
//               placeholder="Title"
//               className="border border-gray-300 rounded-md p-2 mr-2"
//             />
//             <input
//               type="text"
//               value={newAuthor}
//               onChange={(e) => setNewAuthor(e.target.value)}
//               placeholder="Author"
//               className="border border-gray-300 rounded-md p-2 mr-2"
//             />
//             <input
//               type="text"
//               value={newISBN}
//               onChange={(e) => setNewISBN(e.target.value)}
//               placeholder="ISBN"
//               className="border border-gray-300 rounded-md p-2 mr-2"
//             />
//             <button
//               onClick={handleAddBook}
//               className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
//             >
//               Add Book
//             </button>
//           </div>
//         )}

//         {loading ? (
//           <p className="mt-4 text-center">Loading...</p>
//         ) : (
//           <ul className="mt-4 grid gap-4">
//             {books && books.filter(book => !book.deleted).map(book => (
//               <li key={book.id} className="border border-gray-300 rounded-md p-4">
//                 {editBook && editBook.id === book.id ? (
//                   <div>
//                     <input
//                       type="text"
//                       value={newTitle}
//                       onChange={(e) => setNewTitle(e.target.value)}
//                       placeholder="Title"
//                       className="border border-gray-300 rounded-md p-2 mr-2"
//                     />
//                     <input
//                       type="text"
//                       value={newAuthor}
//                       onChange={(e) => setNewAuthor(e.target.value)}
//                       placeholder="Author"
//                       className="border border-gray-300 rounded-md p-2 mr-2"
//                     />
//                     <input
//                       type="text"
//                       value={newISBN}
//                       onChange={(e) => setNewISBN(e.target.value)}
//                       placeholder="ISBN"
//                       className="border border-gray-300 rounded-md p-2 mr-2"
//                     />
//                     <button
//                       onClick={() => handleUpdate(book.id)}
//                       className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none"
//                     >
//                       Update
//                     </button>
//                     <button
//                       onClick={() => setEditBook(null)}
//                       className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 ) : (
//                   <div>
//                     <p><strong>Title:</strong> {book.title}</p>
//                     <p><strong>Author:</strong> {book.author}</p>
//                     <p><strong>ISBN:</strong> {book.isbn}</p>
//                     <button
//                       onClick={() => handleEdit(book)}
//                       className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(book.id)}
//                       className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Catalog;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './footer';
import Header from './header';
import Nav from './nav';

function Catalog() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editBook, setEditBook] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newISBN, setNewISBN] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://book-ecf27-default-rtdb.europe-west1.firebasedatabase.app/books.json');
        const booksFromFirebase = response.data ? Object.keys(response.data).map(key => ({ id: key, ...response.data[key] })) : [];

        // Retrieve deleted books from localStorage
        const deletedBooks = JSON.parse(localStorage.getItem('deletedBooks')) || {};

        // Merge Firebase data with deleted flag from localStorage
        const booksWithDeletedFlag = booksFromFirebase.map(book => ({
          ...book,
          deleted: !!deletedBooks[book.id] // Ensure deleted flag is correctly set
        }));

        setBooks(booksWithDeletedFlag);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Update localStorage whenever books change
    const deletedBooks = books.reduce((acc, book) => {
      if (book.deleted) {
        acc[book.id] = true;
      }
      return acc;
    }, {});
    localStorage.setItem('deletedBooks', JSON.stringify(deletedBooks));
  }, [books]);

  const handleEdit = (book) => {
    setEditBook(book);
    setNewTitle(book.title);
    setNewAuthor(book.author);
    setNewISBN(book.isbn);
  };

  const handleDelete = (id) => {
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === id ? { ...book, deleted: true } : book
      )
    );
  };

  const handleUpdate = async (id) => {
    const updatedBook = { title: newTitle, author: newAuthor, isbn: newISBN };

    // Assuming you want to update the book in Firebase
    try {
      await axios.put(`https://book-ecf27-default-rtdb.europe-west1.firebasedatabase.app/books/${id}.json`, updatedBook);
      setBooks(prevBooks =>
        prevBooks.map(book => (book.id === id ? { ...updatedBook, id } : book))
      );
      setEditBook(null);
      setNewTitle('');
      setNewAuthor('');
      setNewISBN('');
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const handleAddBook = async () => {
    const newBook = { title: newTitle, author: newAuthor, isbn: newISBN, deleted: false };

    try {
      const response = await axios.post('https://book-ecf27-default-rtdb.europe-west1.firebasedatabase.app/books.json', newBook);
      const bookWithId = { id: response.data.name, ...newBook };
      setBooks(prevBooks => [...prevBooks, bookWithId]);
      setShowAddForm(false);
      setNewTitle('');
      setNewAuthor('');
      setNewISBN('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <>
      <Nav />
      <Header />
      <div className="bg-gray-100 p-6">
        <h2 className="text-center text-3xl font-bold mb-6">Book Catalog</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : 'Add New Book'}
        </button>

        {showAddForm && (
          <div className="mt-4">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Title"
              className="border border-gray-300 rounded-md p-2 mr-2"
            />
            <input
              type="text"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
              placeholder="Author"
              className="border border-gray-300 rounded-md p-2 mr-2"
            />
            <input
              type="text"
              value={newISBN}
              onChange={(e) => setNewISBN(e.target.value)}
              placeholder="ISBN"
              className="border border-gray-300 rounded-md p-2 mr-2"
            />
            <button
              onClick={handleAddBook}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Add Book
            </button>
          </div>
        )}

        {loading ? (
          <p className="mt-4 text-center">Loading...</p>
        ) : (
          <ul className="mt-4 grid gap-4">
            {books && books.filter(book => !book.deleted).map(book => (
              <li key={book.id} className="border border-gray-300 rounded-md p-4">
                {editBook && editBook.id === book.id ? (
                  <div>
                    <input
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="Title"
                      className="border border-gray-300 rounded-md p-2 mr-2"
                    />
                    <input
                      type="text"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder="Author"
                      className="border border-gray-300 rounded-md p-2 mr-2"
                    />
                    <input
                      type="text"
                      value={newISBN}
                      onChange={(e) => setNewISBN(e.target.value)}
                      placeholder="ISBN"
                      className="border border-gray-300 rounded-md p-2 mr-2"
                    />
                    <button
                      onClick={() => handleUpdate(book.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => setEditBook(null)}
                      className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div>
                    <p><strong>Title:</strong> {book.title}</p>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>ISBN:</strong> {book.isbn}</p>
                    <button
                      onClick={() => handleEdit(book)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Catalog;



