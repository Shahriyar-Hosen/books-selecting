import React from 'react';
import Select from '../Select/Select';
import './Selected.css';

const Selected = ({selectedBook}) => {
    const slicedItems = selectedBook.slice(0,4);

    const chooseOne = (item) => {
        const random = item[Math.floor(Math.random()*item.length)];;
        console.log(random);
    }

    return (
        <div className='selected-book'>
            <h2>Selected Books</h2>
            {
                slicedItems.map((book) => <Select 
                book={book}
                key={book.id}
                ></Select>)
            }
            
            <button onClick={() => chooseOne(slicedItems)} className='choose-btn-1'>Choose 1 for me</button>
            <button className='choose-btn-2'>Choose again</button>
        </div>
    );
};

export default Selected;