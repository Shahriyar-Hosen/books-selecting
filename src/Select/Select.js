import React from 'react';

const Select = ({book}) => {
    const {name} = book;
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export default Select;