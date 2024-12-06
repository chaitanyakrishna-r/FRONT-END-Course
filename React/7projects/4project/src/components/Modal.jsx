import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({onClose,  isOpen, children}) => {
  return createPortal(
    <>
        {isOpen && 
        <>
            <div className='m-auto relative min-h-[200px] max-w-[80%] bg-white p-4 z-50 text-black'>
                <div className='flex justify-end'>
                    <AiOutlineClose onClick={onClose} className='text-black text-2xl  '/>
                </div>
                {children}
            </div>
            <div 
            onClick={onClose} 
            className=" absolute top-0 h-screen backdrop-blur w-screen z-20 " />
        </>
        }
    </>
  ,document.getElementById("modal-root"))
};

export default Modal