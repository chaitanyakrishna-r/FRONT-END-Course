import React from 'react'

const Modal = ({header, footer, main, id,onClose}) => {
  return (
    <div className='modal-popup' id={id ? id : 'modal-id' }>
        <div className='content'>
            <div className='header-section'>
                <span onClick={onClose}>&times;</span>
                {header ? header : <h1>This is Header</h1>}
            </div>
            <div className='main'>
                {main ? main : <p>This is body</p>}
            </div>
            <div className='footer'>
                {footer ? footer : <h1>This is footer</h1>}
            </div>

        </div>
    </div>
  )
}

export default Modal