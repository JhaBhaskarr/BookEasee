import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './books.css';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', price: '', image: '' });

  // Fetch books from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  // Add a new book
  const addBook = () => {
    axios.post('http://localhost:5000/api/books', newBook)
      .then(response => {
        setBooks([...books, { ...newBook, id: response.data.id }]);
        setNewBook({ title: '', author: '', price: '', image: '' });
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="App">
      <h1>Book Store</h1>
      <div className="book-list">
        {books.map(book => (
          <div key={book.id} className="book">
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p>By {book.author}</p>
            <p>${book.price}</p>
          </div>
        ))}
      </div>
      <div className="add-book">
        <h2>Add a New Book</h2>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newBook.price}
          onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newBook.image}
          onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
        />
        <button onClick={addBook}>Add Book</button>
      </div>
    </div>
  );
}

export default App;