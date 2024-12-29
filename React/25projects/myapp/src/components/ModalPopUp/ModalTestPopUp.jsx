import React, { useState } from 'react'
import Modal from './Modal';
import './modal.css'

const ModalTestPopUp = () => {
    const [showModalPopUp, setShowModalPopUp] = useState(false);
    
    function handleToggle(){
        setShowModalPopUp(!showModalPopUp);
    }
    function handleClose(){
        setShowModalPopUp(false);
    }

  return (
    <div className='wrapper'>
        <button onClick={handleToggle}>Modal PopUp</button>
        {showModalPopUp && <Modal
        onClose={handleClose}
        header={<h1>The Header is from ModalTest</h1>}
        main={<p>The content is from ModalTest</p>}
        footer={<h1>The footer is from ModalTest</h1>}
        /> }
    </div>
  )
}

export default ModalTestPopUp