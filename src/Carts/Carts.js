import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Selected from '../Selected/Selected';
import './Carts.css';

const Carts = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
      fetch('data.json')
      .then(res =>res.json())
      .then(data =>setBooks(data))
    }, [])
    
    console.log(books);
    return (
        <div className='carts'>
            <div className='books'>
            {
                books.map((book) => <Book key={book.id} book={book}></Book>)
            }
            </div>
            <Selected></Selected>
        </div>
    );
};

export default Carts;