import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Selected from '../Selected/Selected';
import './Carts.css';

const Carts = () => {
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState([])

    const addToSelected = (book) => {
        const exists = selectedBook.find((selectBooks) => selectBooks.id === book.id);
        if (!exists) {
            const selectedAllBook = [...selectedBook, book];
            setSelectedBook(selectedAllBook)
        }
        else{
            console.log('These items is already added');
        }
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
            <Selected 
            selectedBook ={selectedBook}
            setSelectedBook = {setSelectedBook}
            ></Selected>
            </div>
            
        </div>
    );
};

export default Carts;