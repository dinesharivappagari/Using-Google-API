// src/BookList.js
// src/BookList.js
import React, { useState } from 'react';
import axios from 'axios';

const BookList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const fetchBooks = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}`);
            setBooks(response.data.items || []);
        } catch (error) {
            console.error('Error fetching books:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchBooks();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter book title"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {books.map((book, index) => (
                        <li key={index}>
                            <img
                                src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
                                alt={book.volumeInfo.title}
                            />
                            {book.volumeInfo.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList;
