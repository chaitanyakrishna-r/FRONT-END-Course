import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({onClose,  isOpen, children}) => {
  return createPortal(
    <>
        {isOpen && 
        <>
            <div   className='grid place-items-center absolute top-0 h-screen backdrop-blur w-screen z-20'>
              <div className='m-auto relative min-h-[200px] min-w-[80%] bg-white p-4 z-50 text-black'>
                  <div className='flex justify-end'>
                      <AiOutlineClose onClick={onClose} className='text-black text-2xl  '/>
                  </div>
                  {children}
              </div>
            </div>
        </>
        }
    </>
  ,document.getElementById("modal-root"))
};

export default Modal