import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:8000/books/list/');
      setBooks(response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(`Error: ${error.response.status} - ${error.response.data}`);
      } else if (error.request) {
        // The request was made but no response was received
        setError('Error: No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Book List</h1>
      <button onClick={fetchBooks}>Fetch Books</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.number_of_pages} pages - Published on {book.publish_date} - {book.quantity} in stock
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
