import React from 'react';
import './Book.css';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const Book = ({book, addToSelected}) => {
    const {name, img, category, price} = book;
    
    return (
        <div className='book'>
            <img src={img} alt="" />

            <div className='book-info'>
            <h2>{name}</h2>
            <p>Category: {category}</p>
            <h4>Price: {price} <small>BDT</small></h4>
            </div>
            
            <button 
            onClick={() => addToSelected(book)} 
            className='cart-btn'
            >
                <p>Add To Cart</p>
             <span>
                 <MdOutlineAddShoppingCart />
                 </span>
             </button>
        </div>
    );
};

export default Book;