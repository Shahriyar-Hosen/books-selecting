import React from "react";
import './Select.css'

const Select = ({ book }) => {
  const { name, img } = book;
  return (
    <div className="select">
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default Select;
