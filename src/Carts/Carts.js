import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Selected from '../Selected/Selected';
import './Carts.css';

const Carts = () => {
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState([])

    const addToSelected = (book) => {
        const selectedAllBook = [...selectedBook, book];
        setSelectedBook(selectedAllBook)
    }


    useEffect(() => {
      fetch('data.json')
      .then(res =>res.json())
      .then(data =>setBooks(data))
    }, [])
    
    return (
        <div className='carts'>
            <div className='books'>
            {
                books.map((book) => <Book 
                key={book.id} 
                book={book}
                addToSelected={addToSelected}
                ></Book>)
            }
            </div>
            <div className='selected'>
            <Selected selectedBook={selectedBook}></Selected>
            </div>
            
        </div>
    );
};

export default Carts;