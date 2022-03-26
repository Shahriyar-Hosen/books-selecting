import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import Modal from 'react-modal';
import Choose from '../Choose/Choose';
import Select from '../Select/Select';
import './Selected.css';

Modal.setAppElement('#root');

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const Selected = ({selectedBook, setSelectedBook}) => {
    const [chooseBook, setChooseBook] = useState([])
    const slicedItems = selectedBook.slice(0,4);

    const chooseOne = (item) => {
        setChooseBook(item[Math.floor(Math.random()*item.length)])
        openModal()
    }
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div className='selected-book'>
            <h1>Selected Books</h1>
            {
                slicedItems.map((book) => <Select 
                book={book}
                key={book.id}
                ></Select>)
            }
            
            <button 
            onClick={() => chooseOne(slicedItems)} 
            className='choose-btn-1'
            >Choose 1 for me</button>
            <button 
            className='choose-btn-2'
            onClick={() => setSelectedBook([])}
            >Choose again</button>

            <div className='modal-style'>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <button onClick={closeModal} className = 'close-btn'><CgClose /></button>
                <Choose chooseBook = {chooseBook} ></Choose>
                <button onClick={closeModal} className='ok-btn'>OK</button>
            </Modal>
            </div>
        </div>
    );
};

export default Selected;