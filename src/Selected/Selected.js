import React from 'react';
import Select from '../Select/Select';
import './Selected.css';

const Selected = ({selectedBook}) => {
    return (
        <div className='selected-book'>
            <h2>Selected Books</h2>
            {
                selectedBook.map((book) => <Select 
                book={book}
                key={book.id}
                ></Select>)
            }
        </div>
    );
};

export default Selected;