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
            <button className='choose-btn-1'>Choose 1 for me</button>
            <button className='choose-btn-2'>Choose again</button>
        </div>
    );
};

export default Selected;