import React from 'react';
import './Choose.css'

const Choose = ({chooseBook}) => {
    const {img, name} = chooseBook;
    return (
        <div className='choose'>
            <img src={img} alt="" />
            <h3>Read the book {name} !!!</h3>
        </div>
    );
};

export default Choose;