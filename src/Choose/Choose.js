import React from 'react';
import './Choose.css'

const Choose = ({chooseBook}) => {
    const {img, name} = chooseBook;
    console.log(chooseBook)
    return (
        <div className='choose'>
            <img src={img} alt="" />
            <h3>{name} can read this book!!!</h3>
        </div>
    );
};

export default Choose;